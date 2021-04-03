import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { Button } from "../../components";

const { height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;
interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ description, subtitle, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={last ? "Let's get Started" : "Next"}
        onPress={() => {
          onPress();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "roboto-bold",
    color: "#0c0D34",
    textAlign: "center",
    lineHeight: 80,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    color: "#0c0D34",
    marginBottom: 40,
  },
});

export default SubSlide;
