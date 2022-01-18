import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/intro/background1.png")}
        style={styles.image}
      >
        <View></View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
