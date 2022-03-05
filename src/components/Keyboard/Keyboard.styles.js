import { StyleSheet, Dimensions } from "react-native";
import { keys, colors } from "../../constants";

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 16) / keys[0].length;
const keyHeight = keyWidth * 1.25;

export default StyleSheet.create({
	keyboard: {
		alignSelf: "stretch",
		marginTop: "auto",
		marginBottom: 8,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: colors.black,
	},
	row: {
		alignSelf: "stretch",
		marginBottom: 2,
		flexDirection: "row",
		justifyContent: "center",
	},
	key: {
		width: keyWidth - 4,
		height: keyHeight - 4,
		margin: 2,
		borderRadius: 3,
		backgroundColor: colors.black,
		justifyContent: "center",
		alignItems: "center",
	},
	keyText: {
		color: colors.text,
		fontWeight: "bold",
		fontSize: 18,
		fontFamily: "SourceSansPro_Light",
	},
});
