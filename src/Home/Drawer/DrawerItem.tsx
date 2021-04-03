import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import {
  Theme,
  Box,
  RoundedIcon,
  Text,
  useTheme,
  HomeRoutes,
} from "../../components";

interface BaseDrawerItem {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface onPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | onPressDrawerItem;

const DrawerItem = ({ label, color, icon, ...props }: DrawerItemProps) => {
  const theme = useTheme();
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();
  return (
    <RectButton
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
      style={{ borderRadius: theme.borderRadii.m }}
    >
      <Box flexDirection="row" padding="s" alignItems="center">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={45}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="button" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
