import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
});

export default ViewImageScreen;
