import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Text, Theme } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  title: string;
  onPress: () => void;
}

const Button = ({ title, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    // eslint-disable-next-line no-nested-ternary
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;

  const color = variant === "primary" ? theme.colors.white : theme.colors.text;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={[styles.label, { color }]}>
        {title}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "roboto-bold",
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

Button.defaultProps = { variant: "default" };

export default Button;
