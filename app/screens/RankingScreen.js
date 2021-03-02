import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts, Amarante_400Regular } from "@expo-google-fonts/amarante";

import Theme from "../styles/Theme";
import Color from "../styles/Color";

import CommunityRankingScreen from "./CommunityRankingScreen";
import DistrictRankingScreen from "./DistrictRankingScreen";
import CountryRankingScreen from "./CountryRankingScreen";
import ShowRankingScreen from "./ShowRankingScreen";

import RankingStack from "../navigators/RankingStack";

function RankingScreen(props) {
  return (
    <RankingStack.Navigator
      initialRouteName="communityRanking"
      headerMode="float"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Color.themeColor,
        },
        headerTitle: () => <RankingHeader navigation={navigation} />,
        headerLeft: false,
      })}
    >
      <RankingStack.Screen name="showRanking" component={ShowRankingScreen} />
    </RankingStack.Navigator>
  );
}

function RankingHeader(props) {
  let [fontsLoaded] = useFonts({
    Amarante_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Amarante_400Regular",
            }}
          >
            ThePingPong
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("community ranking");
            }}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name="home-map-marker"
              size={35}
              color="#fff"
            />
            <Text style={styles.desc}>탁구장랭킹</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("district ranking");
            }}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name="map-marker-circle"
              size={35}
              color="#fff"
            />
            <Text style={styles.desc}>지역랭킹</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("country ranking");
            }}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name="medal-outline"
              size={35}
              color="#fff"
            />
            <Text style={styles.desc}>전국랭킹</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    margin: 5,
    alignItems: "center",
  },
  desc: {
    fontSize: 12,
    color: "#fff",
    paddingBottom: 7,
  },
});

export default RankingScreen;
