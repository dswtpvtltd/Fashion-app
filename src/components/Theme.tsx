import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    secondary: "#0c0d34",
    drawerbottomcolor: "#3e3b50",
    primary: "#2cb9b0",
    danger: "#ff0054",
    body: "rgba(12,13,52,0.7)",
    white: "white",
    text: "#0c0d34",
    grey: "rgba(12, 13, 52, 0.5)",
    darkGrey: "#808080",
    lightGrey: "#fafafa",
    button: "#0c0d34",
    "slide.grey": "#f4f0ef",
    darkgrey: "#eeeeee",
    primaryLight: "#e7f9f7",
    violet: "#ee82ee",
    pink: "#ffc0cb",
    orange: "#ffa500",
    yellow: "#ffff00",
    lightBlue: "#BFEAF5",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: "roboto-bold",
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: "roboto-bold",
      color: "text",
    },
    title2: {
      fontSize: 24,
      fontFamily: "roboto-light",
      lineHeight: 30,
      color: "text",
    },
    title3: {
      fontSize: 16,
      fontFamily: "roboto-light",
      color: "text",
    },
    body: {
      fontSize: 16,
      fontFamily: "roboto-regular",
      lineHeight: 30,
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "roboto-regular",
      color: "white",
    },
    header: {
      fontSize: 12,
      fontFamily: "roboto-regular",
      lineHeight: 24,
      color: "secondary",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
