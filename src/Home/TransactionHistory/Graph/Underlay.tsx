import moment from "moment";
import React from "react";
import { StyleSheet } from "react-native";

import { Box, Text, useTheme } from "../../../components";

export const MARGIN = "xl";
const ROW_HEIGTH = 16;

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};

interface UnderlayProps {
  minY: number;
  maxY: number;
  startDate: number;
  numberofMonths: number;
  step: number;
}

const Underlay = ({
  step,
  minY,
  maxY,
  startDate,
  numberofMonths,
}: UnderlayProps) => {
  const minDate = moment(startDate);

  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFillObject}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.75, 0.5, 0.25, 0].map((progress, index) => {
          return (
            <Box
              key={index}
              flexDirection="row"
              alignItems="center"
              style={{
                top:
                  // eslint-disable-next-line no-nested-ternary
                  progress === 0
                    ? ROW_HEIGTH / 2
                    : progress === 1
                    ? -ROW_HEIGTH / 2
                    : 0,
              }}
            >
              <Box width={theme.spacing[MARGIN]} paddingRight="s">
                <Text color="darkGrey" textAlign="right">
                  {Math.round(lerp(minY, maxY, progress))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="darkGrey" />
            </Box>
          );
        })}
      </Box>
      <Box
        marginLeft="m"
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        justifyContent="space-between"
      >
        {new Array(numberofMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => {
            return (
              <Box width={step} key={index}>
                <Text color="darkGrey" textAlign="center">
                  {date.format("MMM")}
                </Text>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Underlay;
