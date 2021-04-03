import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";

import {
  Box,
  Header,
  HomeNavigationProps,
  Text,
  useTheme,
} from "../../components";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Edit PROFILE"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark={true}
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={-50}
          left={width / 2 - 50}
          right={0}
          bottom={0}
          backgroundColor="primaryLight"
          style={{ borderRadius: 50 }}
          width={100}
          height={100}
        />
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Vidya Sagar
          </Text>
          <Text variant="body" textAlign="center">
            vidya@gmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
