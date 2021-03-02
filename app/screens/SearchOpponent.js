import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import Profile from "../profiles/Profile";
import Color from "../styles/Color";

function SearchOpponent(props) {
  let opponents = [];
  for (let i = 0; i < 20; i++) {
    opponents.push({ img: require("../assets/profile.jpeg") });
  }
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image source={item.img} style={styles.opponentProfile} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <TextInput
          placeholder={"검색"}
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: Color.themeColor,
          }}
        />
      </View>
      <FlatList
        data={opponents}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={(item, index) => ({
          length: styles.opponentProfile.width,
          offset: styles.opponentProfile.width * index,
          index,
        })}
        numColumns={3}
        style={{ alignSelf: "center" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  opponentProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
  },
});

export default SearchOpponent;
