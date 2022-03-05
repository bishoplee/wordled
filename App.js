import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { colors, CLEAR, ENTER } from './src/constants';
import Keyboard from './src/components/Keyboard';

const NUMBER_OF_TRIES = 6;

const copyArray = (arr) => {
  return [...(arr).map(rows => [...rows])];
};

export default function App() {
  let [fontsLoaded] = useFonts({
    'SourceSansPro_Regular': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
    'SourceSansPro_Light': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf'),
    'Encoded_Light': require('./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-Light.ttf'),
    'EncodedExtra_Light': require('./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-ExtraLight.ttf'),
    'Encoded_Regular': require('./assets/fonts/Encode_Sans_Condensed/EncodeSansCondensed-Regular.ttf'),
  });

  const word = "hello";
  const letters = word.split("");

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(
      new Array(letters.length).fill("")
    )
  );

  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);

  const onKeyPressed = (key) => {
    const updatedRows = copyArray(rows);

    if (key === CLEAR) {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = "";
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);        
      }
      return;
    }

    //update each cell in a row and
    //prevent row entries from overflowing
    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const isCellActive = (row, col) => {
    return row === curRow && col === curCol;
  };

  const getCellBackgroundColor = (row, col) => {
    const letter = rows[row][col];

    if (row >= curRow) { return colors.black; }
    if (letter === letters[col]) { return colors.primary; }
    if (letters.includes(letter)) { return colors.secondary; }
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
  
  return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style="light" />

				<Text style={styles.title}>WORDLED</Text>

				<View style={styles.map}>
					{rows.map((row, i) => (
						<View style={styles.row} key={`row-${i}`}>
							{row.map((letter, j) => (
								<View
									style={[
										styles.cell,
										{
											borderColor: isCellActive(i, j)
												? colors.lightgrey
												: colors.cell,
											backgroundColor:
												getCellBackgroundColor(i, j),
										},
									]}
									key={`cell-${i}-${j}`}
								>
									<Text style={styles.cellText}>
										{letter.toUpperCase()}
									</Text>
								</View>
							))}
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
