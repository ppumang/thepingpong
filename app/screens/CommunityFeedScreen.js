import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Touchable,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Color from "../styles/Color";

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

function CommunityFeedScreen(props) {
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
      <View style={styles.communityList}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/malong.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <Text style={{ alignSelf: "center", marginLeft: 10 }}>명일</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/zhangjike.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <Text style={{ alignSelf: "center", marginLeft: 10 }}>코리아</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.plusContainer}>
          <MaterialCommunityIcons
            name="playlist-plus"
            size={30}
            color={"#fff"}
            style={{ paddingRight: 10, paddingLeft: 14 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  communityList: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.themeOpacity,
    height: 85,
    justifyContent: "space-between",
  },
  communityTitle: {
    width: 55,
    height: 55,
    backgroundColor: "dodgerblue",
    borderRadius: 100,
    textAlign: "center",
    lineHeight: 50,
    margin: 10,
    color: "#fff",
  },
  plusContainer: {
    backgroundColor: Color.themeColor,
    margin: 0,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default CommunityFeedScreen;
