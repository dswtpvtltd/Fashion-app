import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Button } from "../../components";

interface FooterProps {
  title: string;
  onPress: () => void;
}

const Footer = ({ title, onPress }: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      backgroundColor="secondary"
      padding="m"
      borderTopLeftRadius="xl"
      borderBottomLeftRadius="xl"
    >
      <Box alignItems="center" style={{ padding: insets.top }}>
        <Button variant="primary" {...{ title, onPress }} />
      </Box>
    </Box>
  );
};

export default Footer;
