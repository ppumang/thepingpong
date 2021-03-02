import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts, Amarante_400Regular } from "@expo-google-fonts/amarante";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Color from "../styles/Color";

import BattleStack from "../navigators/BattleStack";

import SearchOpponent from "../screens/SearchOpponent";

function BattleScreen(props) {
  return (
    <BattleStack.Navigator
      initialRouteName="searchOpponent"
      headerMode="float"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Color.themeColor,
        },
        headerTitle: () => <BattleHeader navigation={navigation} />,
        headerLeft: false,
      })}
    >
      <BattleStack.Screen name="searchOpponent" component={SearchOpponent} />
    </BattleStack.Navigator>
  );
}

function BattleHeader(props) {
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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontFamily: "Amarante_400Regular" }}>
          ThePingPong
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* <TouchableOpacity style={{ padding: 5 }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={"#fff"}
            />
          </TouchableOpacity> */}
          <TouchableOpacity style={{ paddingTop: 5 }}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={"#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BattleScreen;
