import React, { useState } from "react";
import { sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash";

import { Box, Header, HomeNavigationProps } from "../../components";

import Background from "./Background";
import Card from "./Card";
import Categories from "./Categories";

const cards = [
  {
    index: 3,
    source: require("./assets/2014-11-01-19.53.36.jpg"),
  },
  {
    index: 2,
    source: require("./assets/2014-11-01-19.53.42.jpg"),
  },
  {
    index: 1,
    source: require("./assets/2014-11-01-19.53.48.jpg"),
  },
  {
    index: 0,
    source: require("./assets/2014-11-01-19.53.54.jpg"),
  },
];

const steps = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="OutFit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        dark={false}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            index * steps + steps > currentIndex && (
              <Card
                key={index}
                position={sub(index * steps, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + steps)}
                {...{ source, steps }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
