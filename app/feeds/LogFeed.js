import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Color from "../styles/Color";

function LogFeed(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.log}>김민재 3 : 진문화 0</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    margin: 10,
    backgroundColor: Color.themeOpacity,
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
  },
  log: {
    color: Color.themeColor,
    alignSelf: "center",
  },
});

export default LogFeed;
