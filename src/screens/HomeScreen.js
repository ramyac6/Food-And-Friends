import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapScreen from "./MapScreen";
import RecipeScreen from "./RecipeScreen";
import ChatBotScreen from "./ChatBotScreen";
import SettingsScreen from "./SettingsScreen";

import Colors from "../constants/Colors";

const Tabs = createBottomTabNavigator();

export default function HomeScreen(props, { navigation }) {
  const userID = props.extraData;
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.darkGray,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tabs.Screen name="Recipe" component={RecipeScreen} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Chat Bot" component={ChatBotScreen} />

      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
