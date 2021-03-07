import React, { useEffect } from "react";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to acces the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
