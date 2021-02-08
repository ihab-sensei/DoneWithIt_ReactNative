import React from "react";
import { View } from "react-native";

import AppText from "./app/components/AppText";

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
      <AppText>
        I love react native! because you can have one code base for both ios and
        android
      </AppText>
    </View>
  );
}
