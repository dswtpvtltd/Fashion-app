import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Theme, Box, Text } from "./Theme";

export interface RoundedIconProps {
  name:
    | "check"
    | "x"
    | "zap"
    | "heart"
    | "user"
    | "clock"
    | "setting"
    | "log-out"
    | "shopping-bag"
    | "share"
    | "arrow-left";
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      style={{ borderRadius: size / 2 }}
      justifyContent="center"
      alignItems="center"
      marginRight="s"
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} name={name} style={{ textAlign: "center" }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.8,
};

export default RoundedIcon;
