import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
  Image,
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
          flex: 0.55,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "tomato",
            left: 20,
          }}
        />
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "dodgerblue",
            right: 20,
          }}
        />
      </View>

      <Image
        style={{
          width: "100%",
          height: "60%",
        }}
        source={require("./assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
