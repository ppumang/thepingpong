import React from "react";
import { View, Text, FlatList } from "react-native";

import LogFeed from "../feeds/LogFeed";
import TextFeed from "../feeds/TextFeed";
import ImageFeed from "../feeds/ImageFeed";
import Profile from "../profiles/Profile";

const Data = [
  { type: "log" },
  { type: "text" },
  { type: "image" },
  { type: "log" },
  { type: "log" },
  { type: "text" },
  { type: "image" },
  { type: "log" },
  { type: "text" },
  { type: "log" },
  { type: "image" },
];

function HomeFeedScreen(props) {
  const renderItem = ({ item }) => {
    if (item.type === "log") {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Profile />
          <LogFeed />
        </View>
      );
    } else if (item.type === "text") {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Profile />
          <TextFeed />
        </View>
      );
    } else if (item.type === "image") {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Profile />
          <ImageFeed />
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
