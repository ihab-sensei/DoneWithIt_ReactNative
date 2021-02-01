import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={"Click me!"}
        onPress={() => {
          Alert.alert("customized alert", "Alert message", [
            {
              text: "yes",
              onPress: () => console.log("Yes button was pressed"),
            },
            {
              text: "no",
              onPress: () => console.log(StatusBar.currentHeight),
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
