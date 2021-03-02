import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

function Profile(props) {
  return (
    <TouchableOpacity>
      <Image source={require("../assets/profile.jpeg")} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
    margin: 10,
  },
});

export default Profile;
