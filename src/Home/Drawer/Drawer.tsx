import * as React from "react";
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import { Dimensions, Image } from "react-native";

import { Box, Text, Header, useTheme } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const assets = [
  require("../../components/assets/pattern/stars-pattern.png"),
];

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    //screen: "NotificationSettings",
    screen: "FavoriteOutfits",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const Drawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box backgroundColor="white" flex={0.2}>
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
            title="MY PROFILE"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark={true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          flex={1}
          backgroundColor="drawerbottomcolor"
          style={{
            position: "absolute",
            bottom: -height * 0.61,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderBottomRightRadius="xl"
          borderTopLeftRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            right={0}
            bottom={0}
            backgroundColor="primaryLight"
            style={{ borderRadius: 50 }}
            width={100}
            height={100}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Vidya Sagar
            </Text>
            <Text variant="body" textAlign="center">
              vidya@gmail.com
            </Text>
          </Box>
          {items.map((item, index) => (
            <DrawerItem key={index} {...item} />
          ))}
        </Box>
      </Box>
      <Box backgroundColor="white">
        <Box
          backgroundColor="white"
          overflow="hidden"
          width={DRAWER_WIDTH}
          height={height * 0.61}
          style={{
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        >
          <Image
            source={assets[0]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: DRAWER_WIDTH,
              top: -height * (1 - 0.61),
              height,
              borderTopLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
