import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "../theme/Color";
import LottieView from "lottie-react-native";

export default class SplashScreen extends Component {
  async componentDidMount() {
    console.log(this.props.route.params.data);
  }
  render() {
    return (
      <View style={styles.custom}>
        <LottieView
          autoPlay
          loop={false}
          source={require("../assets/images/intro/intro.json")}
          onAnimationFinish={() => {
            return new Promise((resolve) =>
              setTimeout(() => {
                this.props.navigation.replace("WelcomeScreen");
              }, 100)
            );
          }}
        />
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
});
