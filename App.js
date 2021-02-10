import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";

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
      <AppButton title="login" onPress={() => console.log("Tapped")} />
    </View>
  );
}
