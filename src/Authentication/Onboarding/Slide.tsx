import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { Text } from "../../components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

export const BORDER_RADIUS = 75;
interface SlideProps {
  right?: boolean;
  title: string;
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    overflow: "hidden",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

export default Slide;
