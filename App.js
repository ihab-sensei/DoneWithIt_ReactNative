import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          borderWidth: 10,
          borderColor: "royalblue",
          shadowColor: "grey",
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
        }}
      ></View>
    </View>
  );
}
