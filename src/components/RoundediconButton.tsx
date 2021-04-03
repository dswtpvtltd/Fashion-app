import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface RoundediconButtonProps extends RoundedIconProps {
  onPress?: () => void;
}

const RoundediconButton = ({ onPress, ...props }: RoundediconButtonProps) => {
  return (
    <BorderlessButton
      {...{ onPress }}
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
    >
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundediconButton.defaultProps = {
  iconRatio: 0.8,
};

export default RoundediconButton;
