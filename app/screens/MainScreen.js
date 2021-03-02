import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ProfileScreen from "./ProfileScreen";
import RankingScreen from "./RankingScreen";
import HomeScreen from "./HomeScreen";
import Color from "../styles/Color";
import Theme from "../styles/Theme";
import CommunityScreen from "./CommunityScreen";
import PostingScreen from "./PostingScreen";
import BattleScreen from "./BattleScreen";

import RootStack from "../navigators/RootStack";
import MainBottomTab from "../navigators/MainBottomTab";

const profileImage = require("../assets/profile.jpeg");

function MainScreen(props) {
  return (
    <MainBottomTab.Navigator
      labeled={false}
      barStyle={{ backgroundColor: Color.themeColor }}
    >
      <MainBottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="battle"
        component={BattleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="table-tennis"
              color={color}
              size={26}
            />
          ),
        }}
        // listeners={{
        //   tabPress: (e) => {
        //     e.preventDefault();
        //     props.navigation.navigate("battle");
        //   },
        // }}
      />
      <MainBottomTab.Screen
        name="ranking"
        component={RankingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={profileImage}
              style={{ width: 33, height: 33, borderRadius: 100 }}
            />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
}

export default MainScreen;
