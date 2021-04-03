import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, LogBox } from "react-native";
import { useQuery } from "@apollo/client";
import Carousel from "react-native-banner-carousel";

import { GET_ALLBANNERS } from "../graphql/query";
import * as InterfaceType from "../interfaces/banner";
import Slide from "../Authentication/Onboarding/Slide";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const MainSlider = () => {
  const { loading, error, data } = useQuery<InterfaceType.AllBanners>(
    GET_ALLBANNERS,
    {}
  );

  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  });

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <View style={{ flex: 1 }}>
        <Text>There are something wrong!</Text>
      </View>
    );
  }

  const { allBanners } = data;

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
        >
          {allBanners.listBanners.map((banner: InterfaceType.ListBanners) => {
            return (
              <Slide
                key={banner.banner_id}
                label={banner.name}
                image={banner.image}
                BannerWidth={BannerWidth}
                BannerHeight={BannerHeight}
              />
            );
          })}
        </Carousel>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 0.61,
  },
  footer: {
    flex: 1,
  },
});

MainSlider.navigationOptions = {
  headerTitle: "Home Page",
};

export default MainSlider;
