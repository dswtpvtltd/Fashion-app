import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";

import {
  AuthNavigationProps,
  useTheme,
  makeStyles,
  Theme,
} from "../../components";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Relaxed sub title",
    description: "Relaxed description",
    color: "#BFEAF5",
    picture: {
      src: require("../../../assets/icon.png"),
      width: 1700,
      height: 1700,
    },
  },
  {
    title: "Playful",
    subtitle: "Playful subtitle",
    description: "Playful description",
    color: "#BEECC4",
    picture: {
      src: require("../../../assets/icon.png"),
      width: 1700,
      height: 1700,
    },
  },
  {
    title: "Excentric",
    subtitle: "Excentric sub title",
    description: "Excentric description",
    color: "#FFE4D9",
    picture: {
      src: require("../../../assets/icon.png"),
      width: 1700,
      height: 1700,
    },
  },
  {
    title: "Funky",
    subtitle: "Funky sub title",
    description: "Funky description",
    color: "#FFDDDD",
    picture: {
      src: require("../../../assets/icon.png"),
      width: 1700,
      height: 1700,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  const styles = useStyles();
  const theme = useTheme();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map((slide, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image
                source={slide.picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    width -
                    (theme.borderRadii.xl * slide.picture.height) /
                      slide.picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map((slide, index) => {
            return (
              <Slide key={index} right={!(index % 2)} title={slide.title} />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={[styles.footer, { backgroundColor }]}>
        <View style={styles.footerContainer}>
          <View style={styles.pagination}>
            {slides.map((_, index) => {
              return (
                <Dot
                  key={index}
                  currentIndex={divide(x, width)}
                  {...{ index }}
                />
              );
            })}
          </View>
          <Animated.View
            style={{
              flex: 1,
              width: width * slides.length,
              flexDirection: "row",
              transform: [{ translateX: Animated.multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  key={index}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));

export default Onboarding;
