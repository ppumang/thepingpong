import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Color from "../styles/Color";

function WelcomeScreen(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  let handlePress = () => {
    props.navigation.navigate("main");
  };
  let handleIDChange = () => {};
  let handlePasswordChange = () => {};
  return (
    <View style={styles.background}>
      <TextInput
        style={styles.input}
        placeholder={"ID"}
        onChangeText={handleIDChange}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        onChangeText={handlePasswordChange}
      ></TextInput>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="table-tennis"
          color={Color.themeColor}
          size={40}
          onPress={handlePress}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#000",
  },
});

export default WelcomeScreen;
