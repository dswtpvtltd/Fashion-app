import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";

import { Box } from "../../components";

import { useSpring } from "./Animated";

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: number;
  steps: number;
}

const { width: wWidth, height: hHeight } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = hHeight * (294 / 525);
const borderRadius = 24;

const Card = ({ position, onSwipe, source, steps }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const backgroundColor = mixColor(
    position,
    "rgba(201, 233, 231, 1)",
    "rgba(115, 180, 177, 1)"
  );

  const translateYOffset = mix(position, 0, -50);

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, width],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const scale = mix(position, 1, 0.9);
  const ImageScale = interpolate(steps, {
    inputRange: [0, steps],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
      onSnap: () => true,
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            overflow: "hidden",
            borderColor: "danger",
            borderWidth: 2,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: ImageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
