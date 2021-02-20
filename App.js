import React from "react";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        ImageComponent={<Icon name="email" />}
      ></ListItem>
    </Screen>
  );
}
