import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Color from "../theme/Color";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/images/intro/background2.png"),
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/intro/background3.png"),
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/intro/background4.png"),
  },
];

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={item.image}
          style={styles.image}
        ></ImageBackground>
      </View>
    );
  };
  _onDone = () => {
    this.props.navigation.replace("Login");
  };
  _renderNextButton = () => {
    return (
      <View>
        <Text style={styles.next}>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Text style={styles.done}>Done</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          dotStyle={styles.dots}
          activeDotStyle={styles.activeDots}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  dots: {
    backgroundColor: Color.white,
  },
  activeDots: {
    backgroundColor: Color.purple,
  },
  next: {
    fontSize: 14,
    fontWeight: "700",
    color: Color.white,
  },
  done: {
    fontSize: 14,
    fontWeight: "700",
    color: Color.white,
  },
});
