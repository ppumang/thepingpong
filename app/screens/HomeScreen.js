import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts, Amarante_400Regular } from "@expo-google-fonts/amarante";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Color from "../styles/Color";

import HomeFeedScreen from "../screens/HomeFeedScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

import HomeStack from "../navigators/HomeStack";

function HomeScreen(props) {
  return (
    <HomeStack.Navigator
      initialRouteName="post"
      headerMode="float"
      headerTitleStyle={{ alignSelf: "center" }}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Color.themeColor,
        },
        headerTitle: () => <HomeHeader navigation={navigation} />,
        headerLeft: false,
      })}
    >
      <HomeStack.Screen name="homeFeed" component={HomeFeedScreen} />
    </HomeStack.Navigator>
  );
}

function HomeHeader(props) {
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
          <TouchableOpacity style={{ padding: 5 }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={"#fff"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingTop: 5 }}
            onPress={() => {
              props.navigation.navigate("posting");
            }}
          >
            <MaterialCommunityIcons name="plus" size={30} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
