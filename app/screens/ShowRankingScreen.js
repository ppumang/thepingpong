import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Color from "../styles/Color";

let data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    name: "김민재",
    elo: Math.floor(Math.random() * 3000),
  });
}
data.sort((a, b) => {
  return a.elo < b.elo;
});
for (let i = 0; i < 50; i++) {
  data[i].rank = i + 1;
}

function ShowRankingScreen(props) {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/profile.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginLeft: -20,
            }}
          />
        </TouchableOpacity>
        <Text>{item.name}</Text>
        <Text>{item.elo}</Text>
        <Text>{item.rank}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: "center" }}>명일탁구장</Text>
      </View>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Image
            source={require("../assets/profile.jpeg")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Text>뿌망</Text>
          <Text>2031</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              color: Color.themeColor,
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            27th
          </Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, idx) => {
            return idx.toString();
          }}
        />
      </View>
    </View>
  );
}

export default ShowRankingScreen;
