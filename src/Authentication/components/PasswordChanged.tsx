import React from "react";
import { Linking } from "react-native";

import {
  AuthNavigationProps,
  Container,
  Box,
  Text,
  Button,
  RoundediconButton,
} from "../../components";

const SIZE = 60;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  const footer = (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginTop="xl"
    >
      <RoundediconButton
        name="x"
        size={SIZE}
        color="secondary"
        backgroundColor="white"
        onPress={() => Linking.openURL("mailto:help@support.com")}
      />
    </Box>
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl" flex={1} alignItems="center">
        <RoundediconButton
          name="check"
          size={SIZE}
          color="primary"
          backgroundColor="primaryLight"
          onPress={() => true}
        />
        <Box>
          <Text variant="title1" textAlign="center" marginBottom="l">
            Your password was changed successfully
          </Text>
          <Text variant="body" textAlign="center">
            Close this window and login again
          </Text>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            title="Reset Password"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
