import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Image } from "react-native";
import Color from "../styles/Color";

function ImageFeed(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../assets/feedContent.jpeg")}
        style={styles.image}
      />
      <Text style={styles.desc}>지난주에 드디어 입상~</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    margin: 10,
    maxHeight: 200,
    justifyContent: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  desc: {
    color: Color.themeColor,
  },
});

export default ImageFeed;
