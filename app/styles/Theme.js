import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Theme = StyleSheet.create({
  statusBarPadding: {
    paddingTop: getStatusBarHeight(),
  },
});

export default Theme;
