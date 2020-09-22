import React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
} from "react-native";

export default class Blank extends React.Component {
  state = {};

  render = () => (
    <View style={styles.container}>
      <Text>Welcome to Crowdbotics</Text>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }}/>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }}/>
      <TouchableOpacity style={styles.button}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
