import React, { ReactNode } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

export const assets = [
  require("./assets/pattern/bg-pattern.jpg"),
  require("./assets/pattern/stars-pattern.png"),
  require("./assets/pattern/flower-pattern.jpg"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRation = 261 / 365;
const height = width * aspectRation;

interface ContainerProops {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProops) => {
  const theme = useTheme();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            style={{
              borderRadius: theme.borderRadii.xl,
              borderTopLeftRadius: 0,
            }}
            backgroundColor="white"
            borderColor="primary"
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </Box>
          <Box height={200} backgroundColor="secondary">
            {footer}
          </Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
