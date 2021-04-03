import React from "react";
import { Image, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import {
  Text,
  Button,
  AuthNavigationProps,
  Box,
  useTheme,
} from "../../components";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/icon.png"),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slide.grey"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              width - (theme.borderRadii.xl * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="slide.grey"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get Started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or sign for an amazon experience
          </Text>
          <Button
            variant="primary"
            title="Have an Account? Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            title="Join us, It's Free"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
          <BorderlessButton
            onPress={() => {
              navigation.navigate("ForgetPassword");
            }}
          >
            <Text variant="button" color="text">
              Forget Password
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
