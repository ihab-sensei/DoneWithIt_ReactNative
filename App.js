import React, { useState } from "react";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsScreen from "./app/screens/ListingsScreen";
import { Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return <AppTextInput icon="email" placeholder="type..." />;
}
