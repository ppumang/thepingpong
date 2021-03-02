import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderBackButton } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";
import PostingScreen from "./app/screens/PostingScreen";
import BattleScreen from "./app/screens/BattleScreen";

import RootStack from "./app/navigators/RootStack";
import Color from "./app/styles/Color";
import { Button } from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App(props) {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="welcome">
        <RootStack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="main"
          component={MainScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="posting"
          component={PostingScreen}
          options={{
            title: "새 게시물",
            headerStyle: {
              backgroundColor: Color.themeColor,
            },
            headerTitleStyle: {
              color: "#fff",
              alignSelf: "center",
            },
            headerTintColor: "#fff",
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="send"
                    color="#fff"
                    size={26}
                    style={{ paddingRight: 15 }}
                  />
                </TouchableOpacity>
              );
            },
            headerBackImage: () => (
              <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
                X
              </Text>
            ),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
