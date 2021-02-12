import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="100$"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
