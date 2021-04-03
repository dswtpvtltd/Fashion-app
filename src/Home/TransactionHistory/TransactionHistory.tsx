import React from "react";
import { Dimensions, Image, StyleSheet, PixelRatio } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  Box,
  Text,
  Header,
  HomeNavigationProps,
  makeStyles,
  Theme,
} from "../../components";

import TopCurve from "./TopCurve";
import Graph, { DataPoint } from "./Graph/Graph";
import Transaction from "./Transaction";

const aspectRatio = 3;
const footerHeight = PixelRatio.roundToNearestPixel(
  Dimensions.get("window").width / 3
);

const startDate = new Date("2019-09-01").getTime();

const data: DataPoint[] = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 1,
    color: "primary",
    id: "21345",
  },
  {
    date: new Date("2019-10-01").getTime(),
    value: 0,
    color: "orange",
  },
  {
    date: new Date("2019-11-01").getTime(),
    value: 20,
    color: "yellow",
    id: "21345",
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 10,
    color: "primary",
    id: "21346",
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 40,
    color: "danger",
    id: "21347",
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 10,
    color: "darkgrey",
    id: "21349",
  },
  {
    date: new Date("2020-03-01").getTime(),
    value: 30,
    color: "danger",
    id: "21349",
  },
  {
    date: new Date("2020-04-01").getTime(),
    value: 50,
    color: "danger",
    id: "21350",
  },
];

const numberofMonths = data.length;

export const assets = [
  require("../../components/assets/pattern/stars-pattern.png"),
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
        dark={false}
      />
      <Box flex={1} paddingRight="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
          paddingLeft="m"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.4}>
              TOTAL SPEND
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight">
            <Text>All Time</Text>
          </Box>
        </Box>
        <Graph
          data={data}
          startDate={startDate}
          numberofMonths={numberofMonths}
        />
        <Box paddingLeft="m">
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {data.map((transaction, index) => {
              if (transaction.value === 0) return null;
              return <Transaction key={index} transaction={transaction} />;
            })}
          </ScrollView>
        </Box>
        <TopCurve footerHeight={footerHeight} />
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          aspectRatio={aspectRatio}
          backgroundColor="primary"
          borderTopLeftRadius="xl"
        >
          <Image source={assets[0]} style={styles.footer} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

export default TransactionHistory;
