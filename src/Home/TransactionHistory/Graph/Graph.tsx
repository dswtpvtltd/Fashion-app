import React from "react";
import { Dimensions, View } from "react-native";
import moment from "moment";
import Animated, { divide, multiply, sub } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import { useTransition } from "react-native-redash";

import { Box, useTheme, Theme } from "../../../components";

import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};

export interface DataPoint {
  id?: string;
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberofMonths: number;
}

const Graph = ({ data, startDate, numberofMonths }: GraphProps) => {
  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, { duration: 650 });

  const theme = useTheme();

  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;

  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const step = canvasWidth / numberofMonths;

  const values = data.map((p) => p.value);

  const minValueY = Math.min(...values);
  const maxValueY = Math.max(...values);

  return (
    <Box marginTop="xl" paddingLeft="m" paddingBottom={MARGIN}>
      <Underlay
        startDate={startDate}
        numberofMonths={numberofMonths}
        minY={minValueY}
        maxY={maxValueY}
        step={step}
      />
      <View style={{ width, height, overflow: "hidden" }}>
        {data.map((point, index) => {
          const totalHeight = lerp(0, height, point.value / maxValueY);
          const currentHeight = multiply(totalHeight, transition);

          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );

          const translateY = divide(sub(totalHeight, currentHeight), 2);
          return (
            <AnimatedBox
              key={index}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={totalHeight}
              style={{ transform: [{ translateY }, { scaleY: transition }] }}
            >
              <Box
                backgroundColor={point.color}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: theme.spacing.m,
                  right: theme.spacing.m,
                  opacity: 0.3,
                  borderTopRightRadius: theme.borderRadii.m,
                  borderTopLeftRadius: theme.borderRadii.m,
                }}
              />
              <Box
                backgroundColor={point.color}
                style={{
                  position: "absolute",
                  top: 0,
                  height: totalHeight >= 32 ? 32 : totalHeight,
                  left: theme.spacing.m,
                  right: theme.spacing.m,
                  borderRadius: theme.borderRadii.m,
                }}
              />
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
