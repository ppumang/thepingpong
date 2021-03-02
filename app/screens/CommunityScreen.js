import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Amarante_400Regular } from "@expo-google-fonts/amarante";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Color from "../styles/Color";

import CommunityFeedScreen from "../screens/CommunityFeedScreen";
import PostDetail from "../screens/PostDetailScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

const Stack = createStackNavigator();

function CommunityScreen(props) {
  return (
    <Stack.Navigator
      initialRouteName="communityFeed"
      headerMode="float"
      headerTitleStyle={{ alignSelf: "center" }}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Color.themeColor,
        },
        headerTitle: () => <CommunityHeader navigation={navigation} />,
        headerLeft: false,
      })}
    >
      <Stack.Screen name="communityFeed" component={CommunityFeedScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}

function CommunityHeader(props) {
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
          <TouchableOpacity style={{ paddingTop: 5 }}>
            <MaterialCommunityIcons name="plus" size={30} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CommunityScreen;
