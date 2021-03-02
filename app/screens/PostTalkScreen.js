import React from "react";
import { View, Text, TextInput } from "react-native";

function PostTalkScreen(props) {
  return (
    <View>
      <TextInput
        placeholder={"What's up?"}
        style={{ padding: 15, alignSelf: "stretch" }}
      ></TextInput>
    </View>
  );
}

export default PostTalkScreen;
