import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ title, action, onPress }: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <SocialLogin />
      <Box
        height={insets.bottom}
        flex={1}
        flexDirection="row"
        justifyContent="center"
      >
        <BorderlessButton onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{`${title}`}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
