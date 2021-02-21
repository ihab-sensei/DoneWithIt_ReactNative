import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
