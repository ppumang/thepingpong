import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getStatusBarHeight } from "react-native-status-bar-height";

import Theme from "../styles/Theme";
import Color from "../styles/Color";

function ProfileScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.profileContainer}>
        <View style={styles.profileUpper}>
          <TouchableOpacity>
            <Image
              source={require("../assets/profile.jpeg")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.followContainer}>
            <Text style={styles.elo}>1500</Text>
            <Text>elo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followContainer}>
            <Text style={styles.follow}>210</Text>
            <Text>followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followContainer}>
            <Text style={styles.follow}>342</Text>
            <Text>following</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.name}>뿌망</Text>
          <Text style={styles.desc}>오픈 5부</Text>
        </View>
      </View>
      <View style={styles.myFeedContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
  profileContainer: { flex: 1, padding: 10 },
  profileUpper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followContainer: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
  },
  follow: {
    fontSize: 30,
    fontWeight: "bold",
    color: Color.themeColor,
  },
  elo: {
    fontSize: 30,
    fontWeight: "bold",
    color: Color.themeColor,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.themeColor,
    padding: 5,
  },
  desc: { paddingLeft: 5 },
  myFeedContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rating: {
    fontSize: 100,
    color: Color.themeColor,
  },
  rank: { alignSelf: "center" },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default ProfileScreen;
