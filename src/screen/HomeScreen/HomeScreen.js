import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
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
        <Text>Home</Text>
      </View>
    );
  }
}