import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../styles/Color";

let comments = [];
for (let i = 0; i < 20; i++) {
  comments.push({ name: "someone", comment: "comment about the game" });
}

function LogDetailScreen(props) {
  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/profile.jpeg")}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        </TouchableOpacity>
        <View style={{ padding: 5 }}>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          </TouchableOpacity>
          <Text>{item.comment}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          //   flex: 1,
          flexDirection: "row",
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: Color.themeOpacity,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Image
              source={require("../assets/zhangjike.png")}
              style={styles.profileImage}
            />
            <Text style={{ alignSelf: "center" }}>zhang</Text>
          </View>
          <Text style={{ alignSelf: "center" }}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ alignSelf: "center" }}>1</Text>
          <View>
            <Image
              source={require("../assets/timo.png")}
              style={styles.profileImage}
            />
            <Text style={{ alignSelf: "center" }}>timo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: Color.themeOpacity,
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            color="red"
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chat-outline"
            color="blue"
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx.toString()}
        ></FlatList>
      </View>
      <View style={{ borderTopWidth: 1, borderTopColor: Color.themeOpacity }}>
        <TextInput placeholder={"comment"} style={{ padding: 15 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  icon: {
    padding: 5,
  },
});

export default LogDetailScreen;
