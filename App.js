import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
