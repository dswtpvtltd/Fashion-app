import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as LoginTextInput,
  TextInputProps as LoginTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme, RoundedIcon } from "../../../components";

interface TextInputProps extends LoginTextInputProps {
  placeholder: string;
  iconName: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<LoginTextInput, TextInputProps>(
  ({ iconName, touched, error, ...props }, ref) => {
    console.log(ref);
    const theme = useTheme();

    const SIZE = theme.borderRadii.m;

    // eslint-disable-next-line no-nested-ternary
    const reColor = !touched ? "text" : error ? "danger" : "primary";

    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        borderColor={reColor}
        borderRadius="s"
        height={48}
        borderWidth={StyleSheet.hairlineWidth}
        alignItems="center"
      >
        <Box padding="s">
          <Icon
            size={16}
            name={iconName === "mail" ? "mail" : "lock"}
            {...{ color }}
          />
        </Box>
        <Box flex={1}>
          <LoginTextInput
            {...{ ref }}
            {...props}
            autoCapitalize="none"
            placeholderTextColor={color}
            underlineColorAndroid="transparent"
          />
        </Box>
        {touched && (
          <>
            <RoundedIcon
              backgroundColor={!error ? "primary" : "danger"}
              size={SIZE}
              name={!error ? "check" : "x"}
              color="white"
            />
          </>
        )}
      </Box>
    );
  }
);

export default TextInput;
