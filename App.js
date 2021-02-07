import React from "react";
import { Text, View } from "react-native";
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
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline",
          lineHeight: 60,
          textAlign: "center",
        }}
      >
        I love react native! because you can have one code base for both ios and
        android
      </Text>
    </View>
  );
}
