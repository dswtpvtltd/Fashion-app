import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationRoutes } from "../components";

import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";
export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import PasswordChanged from "./components/PasswordChanged";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Signup" component={Signup} />
      <AuthenticationStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
