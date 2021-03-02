import React from "react";
import { View, Text, FlatList } from "react-native";

import LogPost from "../posts/LogPost";
import PingTalkPost from "../posts/PingTalkPost";
import Profile from "../profiles/Profile";

const Data = [
  { type: "log" },
  { type: "talk" },
  { type: "talk" },
  { type: "log" },
  { type: "log" },
  { type: "talk" },
  { type: "talk" },
  { type: "log" },
  { type: "talk" },
  { type: "log" },
  { type: "talk" },
];

function HomeFeedScreen(props) {
  const renderItem = ({ item }) => {
    if (item.type === "log") {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Profile />
          <LogPost navigation={props.navigation} />
        </View>
      );
    } else if (item.type === "talk") {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Profile />
          <PingTalkPost navigation={props.navigation} />
        </View>
      );
    } else {
      return <Text>Error</Text>;
    }
  };
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default HomeFeedScreen;
