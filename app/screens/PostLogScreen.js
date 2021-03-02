import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function PostLogScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          //   backgroundColor: "#1eb7ff8a",
          justifyContent: "space-around",
        }}
      >
        <Image
          source={require("../assets/profile.jpeg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            alignSelf: "center",
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity>
            <Text style={styles.myScore}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.myScore}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.myScore}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.myScore}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          //   backgroundColor: "#ff1e1e8a",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity>
            <Text style={styles.enemyScore}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.enemyScore}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.enemyScore}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.enemyScore}>3</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/timo.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            alignSelf: "center",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myScore: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e8dff",
    textAlign: "center",
  },
  enemyScore: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff521e",
  },
});
export default PostLogScreen;
