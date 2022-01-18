import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "../theme/Color";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 3000)
    );
  };
  async componentDidMount() {
    this.props.navigation.replace("WelcomeScreen");
  }
  render() {
    return (
      <View style={styles.custom}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo/Logo.png")}
        />
        <View style={styles.text}>
          <Text>Thẻ cá nhân thông minh</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  custom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "BalooTamma2-ExtraBold",
  },
});
