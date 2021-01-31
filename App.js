import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  let x = 1;
  const handleTextPress = () => console.log("Apps is exectued");

  return (
    <View style={styles.container}>
      <Text onPress={handleTextPress} numberOfLines={1}>
        so close no matter how far, couldn't be much more from the heart.
        Forever trust in who we are and nothing else matters.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeigt : 0,
  },
});
