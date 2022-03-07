import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Animated, Vibration, Platform, Easing } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Sound from "react-native-sound";
import AppLoading from "expo-app-loading";
import * as Clipboard from "expo-clipboard";

import { colors, colorsToEmoji, CLEAR, ENTER } from "./src/constants";
import Keyboard from "./src/components/Keyboard";
import wordOfTheDay from './src/api';

Sound.setCategory("Playback");

const NUMBER_OF_TRIES = 6;

const copyArray = (arr) => {
	return [...arr.map((rows) => [...rows])];
};

export default function App() {
	let [fontsLoaded] = useFonts({
		SourceSansPro_Regular: require("./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"),
		SourceSansPro_Light: require("./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf"),
		Encoded_Light: require("./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-Light.ttf"),
		EncodedExtra_Light: require("./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-ExtraLight.ttf"),
		Encoded_Regular: require("./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-Regular.ttf"),
	});

	const letters = wordOfTheDay.split("");

	const [rows, setRows] = useState(
		new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(""))
	);
	const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState('playing');
  const [winStreak, setWinStreak] = useState(0);
  const [lossStreak, setLossStreak] = useState(0);

  const checkGameState = () => {
    if (checkIfGameWon() && gameState !== "won") {
      playSound("achievement.mp3");
      Alert.alert('Huraaaay', "You won!", [{ text: 'Share', onPress: shareScore }]);
      setGameState('won');
    } else if (checkIfGameLost() && gameState !== 'lost') {
      playSound("nahnah.mp3");
      Vibration.vibrate([0, 80, 50, 100]);
      Alert.alert('Nah nah', "Try again tomorrow!");
      setGameState('lost');
    }
  };

  const checkIfGameWon = () => {
    const row = rows[curRow - 1];

    return row.every((letter, i) => letter === letters[i]);
  };

  const checkIfGameLost = () => {
    return !checkIfGameWon() && curRow === rows.length;
  };

  const shareScore = () => {
    const scoreMap = rows
      .map((row, i) =>
        row.map((cell, j) => colorsToEmoji[getCellBackgroundColor(i, j)]).join("")
      )
      .filter((row) => row)
      .join("\n");

    const textToShare = `Wordled #239 \n${scoreMap}`;

    Clipboard.setString(textToShare);
    Alert.alert("Copied successfully", "Share your score on your social network.");
  };

  const playSound = (f) => {
    const winSoundTrack = new Sound(
      f,
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log("failed to load the sound", error);
        } else {
          winSoundTrack.setVolume(0.25);
          winSoundTrack.play((success) => {
            if (success) {
              console.log("successfully finished playing");
            } else {
              console.log(
                "playback failed due to audio decoding errors"
              );
            }
            winSoundTrack.reset();
          });
        }
      }
    );
  };

  const onKeyPressed = (key) => {
    if (gameState !== "playing") {
      return;
    }

		const updatedRows = copyArray(rows);

		if (key === CLEAR) {
			const prevCol = curCol - 1;
			if (prevCol >= 0) {
				updatedRows[curRow][prevCol] = "";
				setRows(updatedRows);
				setCurCol(prevCol);
			}
      Vibration.vibrate([0, 80]);
			return;
		}

		if (key === ENTER) {
			if (curCol === rows[0].length) {
				setCurRow(curRow + 1);
				setCurCol(0);
        Vibration.vibrate([0, 80]);
			}
			return;
		}

		//update each cell in a row and
		//prevent row entries from overflowing
    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
			setRows(updatedRows);
      setCurCol(curCol + 1);
      Vibration.vibrate(40);
		}

	};

  const isCellActive = (row, col) => {
    if (gameState !== "playing") {
      return;
    }
    
		return row === curRow && col === curCol;
	};

	const getCellBackgroundColor = (row, col) => {
		const letter = rows[row][col];

		if (row >= curRow) {
			return colors.black;
		}
		if (letter === letters[col]) {
			return colors.primary;
		}
		if (letters.includes(letter)) {
			return colors.secondary;
		}
		return colors.darkgrey;
	};

	const getAllLettersByColors = (color) => {
		return rows.flatMap((row, i) =>
			row.filter((cell, j) => getCellBackgroundColor(i, j) === color)
		);
	};

	const greenCaps = getAllLettersByColors(colors.primary);
	const yellowCaps = getAllLettersByColors(colors.secondary);
	const greyCaps = getAllLettersByColors(colors.darkgrey);

  /* const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    moveAnimation.setValue(0);
		Animated.timing(moveAnimation, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
  };
  const opacity = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  }); */
  let opacity = new Animated.Value(0);

  const animate = () => {
		opacity.setValue(0);
		Animated.timing(opacity, {
			toValue: 1,
			duration: 800,
			useNativeDriver: true,
		}).start();
  };

  const size = opacity.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 80],
  });

  /* const animatedStyles = [
		styles.box,
		{
			opacity,
			width: size,
			height: size,
		},
  ]; */

  /* const translateX = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  }) */

  useEffect(() => {
		if (curRow > 0) {
			checkGameState();
    }

    /* if (isCellActive(curRow, curCol)) {
      animate();
    } */
	}, [curRow, curCol]);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style="light" />

				<Text style={styles.title}>WORDLED</Text>

				<View style={styles.map}>
					{rows.map((row, i) => (
						<View style={styles.row} key={`row-${i}`}>
							{row.map(
								(letter, j) => (
									<View
										style={[
											styles.cell,
											{
												borderColor: isCellActive(i, j)
													? colors.lightgrey
													: colors.cell,
												backgroundColor:
													getCellBackgroundColor(
														i,
														j
													),
											},
										]}
										key={`cell-${i}-${j}`}
									>
										<Animated.Text
											style={[
												styles.cellText
											]}
										>
											{letter.toUpperCase()}
										</Animated.Text>
									</View>
								),
							)}
						</View>
					))}
				</View>

				<Keyboard
					onKeyPressed={onKeyPressed}
					greenCaps={greenCaps}
					yellowCaps={yellowCaps}
					greyCaps={greyCaps}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		alignItems: "center",
		//paddingTop: 48, //handle notch display for android devices:https://www.freecodecamp.org/news/how-to-use-safe-area-context-to-avoid-notches-in-react-native-apps/
	},
	title: {
		color: colors.white,
		fontSize: 32,
		fontFamily: "SourceSansPro_Regular",
		letterSpacing: 5,
		marginBottom: 24,
		height: 56,
		alignSelf: "stretch",
	},
	map: {
		alignSelf: "stretch",
		flex: 1,
		margin: 32,
	},
	row: {
		alignSelf: "stretch",
		flexDirection: "row",
		marginLeft: 16,
		marginRight: 16,
		justifyContent: "center",
	},
	cell: {
		borderWidth: 3,
		borderColor: colors.cell,
		flex: 1,
		maxWidth: 64,
		aspectRatio: 1,
		margin: 4,
		/* borderRadius: 40, */
		backgroundColor: colors.cell,
		alignItems: "center",
		justifyContent: "center",
	},
	cellText: {
		color: colors.white,
		fontSize: 32,
		fontFamily: "SourceSansPro_Regular",
		fontWeight: "bold",
	},
});
