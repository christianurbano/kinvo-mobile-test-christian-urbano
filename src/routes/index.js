import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Desafio from "../Desafio";
import ActionScreen from "../Ações";
import FundsScreen from "../Fundos";
import PensionScreen from "../Pensions";
import { theme } from "../global/styles/theme";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Desafio"
      screenOptions={{
        headerTitleStyle: {
          color: theme.colors.heading,
          fontSize: 20,
          fontFamily: "Montserrat_700Bold",
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
          height: 100,
        },
      }}
    >
      <Stack.Screen
        name="Desafio"
        component={Desafio}
        options={{ title: "Desafio" }}
      />
      <Stack.Screen
        name="Action"
        component={ActionScreen}
        options={{ title: " Ações" }}
      />
      <Stack.Screen
        name="Funds"
        component={FundsScreen}
        options={{ title: " Fundos" }}
      />
      <Stack.Screen
        name="Pensions"
        component={PensionScreen}
        options={{ title: " Previdências" }}
      />
    </Stack.Navigator>
  );
}
