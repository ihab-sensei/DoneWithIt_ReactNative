import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
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
