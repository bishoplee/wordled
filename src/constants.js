export const colors = {
	black: "#1B1918",
	darkgrey: "#3F3C40",
	lightgrey: "#C6C6C6",
	grey: "#96979D",
	primary: "#538D4E",
	secondary: "#B59F3B",
	white: "#FFFFFF",
	opaque: "rgba(255,255,255,0.05)",
	negative: "#3C373D",
	text: "#DBD5D9",
	cell: "#514E51",
};

export const colorsToEmoji = {
  [colors.darkgrey]: "⬛",
  [colors.primary]: "🟩",
  [colors.secondary]: "🟧",
};

export const ENTER = "ENTER";
export const CLEAR = "DEL";

export const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  [ENTER, "z", "x", "c", "v", "b", "n", "m", CLEAR],
];