import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "80%",
        }}
        source={require("./assets/background.jpg")}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          top: "10%",
          left: 146,
        }}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            height: 84,
            width: 392,
            backgroundColor: "tomato",
          }}
        />
        <View
          style={{
            height: 84,
            width: 392,
            backgroundColor: "dodgerblue",
          }}
        />
      </View>
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
