import React from "react";
import { View, Text, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PostingBottomTab from "../navigators/PostingBottomTab";

import PostLogScreen from "../screens/PostLogScreen";
import PostTalkScreen from "../screens/PostTalkScreen";
import Color from "../styles/Color";

function PostingScreen(props) {
  return (
    <View>
      <TextInput
        placeholder={"What's up?"}
        style={{ padding: 15, alignSelf: "stretch" }}
      ></TextInput>
    </View>
  );
}

export default PostingScreen;
