import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OptionsScreen from "../screens/options.screen";
import HomeScreen from "../screens/home.screen";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={HomeScreen} />
    <Stack.Screen name="Options" component={OptionsScreen} />
  </Stack.Navigator>
);
