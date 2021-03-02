import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Color from "../styles/Color";

function TextFeed(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.log}>
        지금 코리아탁구장에 11명 리그전하고있어요~ 올사람 오세요
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    margin: 10,
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
  },
  log: {
    color: Color.themeColor,
    alignSelf: "center",
  },
});

export default TextFeed;
