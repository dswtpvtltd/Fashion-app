import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome, AntDesign, EvilIcons } from "@expo/vector-icons";

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconszie}>
          <AntDesign name="google" size={24} color="black" />
        </View>
        <View style={styles.iconszie}>
          <FontAwesome name="facebook-f" size={24} color="black" />
        </View>
        <View style={styles.iconszie}>
          <EvilIcons name="sc-twitter" size={34} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconszie: {
    backgroundColor: "white",
    width: 35,
    height: 35,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
  },
});

export default SocialLogin;
