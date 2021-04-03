import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundediconButton from "./RoundediconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      paddingHorizontal="s"
      style={{ marginTop: insets.top }}
    >
      <RoundediconButton
        name={left.icon}
        size={44}
        {...{ color }}
        {...{ backgroundColor }}
        iconRatio={0.5}
        onPress={left.onPress}
      />
      <Text {...{ color }} variant="header">
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundediconButton
          name={right.icon}
          size={44}
          {...{ color }}
          {...{ backgroundColor }}
          iconRatio={0.5}
          onPress={right.onPress}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
