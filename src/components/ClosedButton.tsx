import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "./index";

interface ClosedButtonProps {
  onPress: () => void;
}

const SIZE = 60;
const ClosedButton = ({ onPress }: ClosedButtonProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginTop="xl"
    >
      <RectButton {...{ onPress }}>
        <Box
          style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2 }}
          backgroundColor="white"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="secondary">
            <Icon name="x" size={45} />
          </Text>
        </Box>
      </RectButton>
    </Box>
  );
};

export default ClosedButton;
