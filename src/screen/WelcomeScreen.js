import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Color from "../theme/Color";
import FontSize from "../theme/FontSize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import String from "../theme/String";

let customFonts = {
  "BalooTamma2-ExtraBold": require("../assets/font/BalooTamma2-ExtraBold.ttf"),
  "BalooTamma2-Bold": require("../assets/font/BalooTamma2-Bold.ttf"),
  "BalooTamma2-Medium": require("../assets/font/BalooTamma2-Medium.ttf"),
  "BalooTamma2-Regular": require("../assets/font/BalooTamma2-Regular.ttf"),
  "BalooTamma2-SemiBold": require("../assets/font/BalooTamma2-SemiBold.ttf"),
};
const { width: WIDTH } = Dimensions.get("window");
const slides = [
  {
    key: 1,
    title: String.sliderTitle1,
    text: String.sliderTitle1_des,
    image: require("../assets/images/intro/background2.png"),
  },
  {
    key: 2,
    title: String.sliderTitle2,
    text: "",
    image: require("../assets/images/intro/background3.png"),
  },
  {
    key: 3,
    title: String.sliderTitle3,
    text: "",
    image: require("../assets/images/intro/background4.png"),
  },
];

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  async componentDidMount() {
    this._loadFontsAsync();
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={item.image} style={styles.image}>
          <View style={styles.slides}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </ImageBackground>
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
    if (this.state.fontsLoaded) {
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
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: "column",
  },
  slides: {
    top: -100,
    justifyContent: "flex-start",
    alignItems: "center",
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
    fontSize: FontSize.medium,
    fontWeight: "700",
    color: Color.white,
  },
  done: {
    fontSize: FontSize.medium,
    fontWeight: "700",
    color: Color.white,
  },
  title: {
    width: WIDTH - 55,
    fontSize: 22,
    color: Color.white,
    textAlign: "center",
    fontFamily: "BalooTamma2-ExtraBold",
  },
  text: {
    width: WIDTH - 55,
    color: Color.white,
    textAlign: "center",
    fontFamily: "BalooTamma2-Medium",
  },
});
