import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../components";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row">
        <Box
          width={20}
          height={20}
          backgroundColor={checked ? "primary" : "white"}
          borderRadius="s"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          alignItems="center"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text color="button" variant="button">
          {label}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
