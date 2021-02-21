import React, { useState } from "react";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";

import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(true);
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
    </Screen>
  );
}
