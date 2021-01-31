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
  let x = 1;
  const handleTextPress = () => console.log("Apps is exectued");

  return (
    <View style={styles.container}>
      <Text onPress={handleTextPress} numberOfLines={1}>
        so close no matter how far, couldn't be much more from the heart.
        Forever trust in who we are and nothing else matters.
      </Text>
      <TouchableHighlight onPress={handleTextPress}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
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
