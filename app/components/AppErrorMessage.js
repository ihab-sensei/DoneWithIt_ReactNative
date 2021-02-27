import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

function AppErrorMessage({ error }) {
  return error ? <AppText style={styles.error}>{error}</AppText> : null;
}

const styles = StyleSheet.create({
  error: {
    color: "crimson",
  },
});

export default AppErrorMessage;
