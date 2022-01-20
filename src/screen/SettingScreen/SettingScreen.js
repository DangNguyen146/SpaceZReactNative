import React, { Component } from "react";
import { Text, View } from "react-native";

export default class SettingScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
