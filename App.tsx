import "react-native-gesture-handler";
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import LoadAssets from "./src/components/LoadAssets";
import { theme } from "./src/components/Theme";
import { AppRoutes } from "./src/components";
import {
  assets as AuthenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { HomeNavigator, assets as HomeAssets } from "./src/Home";

const fonts = {
  "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
  "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

const assets = [...AuthenticationAssets, ...HomeAssets];

const App: React.FC = () => {
  const httpLink = new HttpLink({
    uri: "http://luxuryboat.com:8888/graphql",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const AppStack = createStackNavigator<AppRoutes>();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts, assets }}>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none">
              <AppStack.Screen
                name="Authentication"
                component={AuthenticationNavigator}
              />
              <AppStack.Screen name="Home" component={HomeNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
