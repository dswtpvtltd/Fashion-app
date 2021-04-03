import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Box, useTheme } from "../../components";

export const assets = [require("./assets/stars-pattern.png")];

const Background = () => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Box flex={1}>
        <Box flex={1 / 3} backgroundColor="drawerbottomcolor">
          <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
        </Box>
        <Box flex={1 / 3} backgroundColor="secondary" borderTopLeftRadius="xl">
          <Box flex={1} borderTopLeftRadius="xl" borderBottomRightRadius="xl">
            <Image
              source={assets[0]}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
                borderBottomRightRadius: theme.borderRadii.xl,
                borderTopLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1 / 3} backgroundColor="drawerbottomcolor">
          <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
        </Box>
      </Box>
    </View>
  );
};

export default Background;
