import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

export default class LogoScreen extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo/Logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
