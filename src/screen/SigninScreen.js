import React, { Component } from "react";
import LogoScreen from "../components/LogoScreen";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Color from "../theme/Color";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
  "BalooTamma2-ExtraBold": require("../assets/font/BalooTamma2-ExtraBold.ttf"),
  "BalooTamma2-Bold": require("../assets/font/BalooTamma2-Bold.ttf"),
  "BalooTamma2-Medium": require("../assets/font/BalooTamma2-Medium.ttf"),
  "BalooTamma2-Regular": require("../assets/font/BalooTamma2-Regular.ttf"),
  "BalooTamma2-SemiBold": require("../assets/font/BalooTamma2-SemiBold.ttf"),
};

export default class SigninScreen extends Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    const Divider = (props) => {
      return (
        <View {...props}>
          <View style={styles.line}></View>
          <Text style={styles.textOr}>Hoặc</Text>
          <View style={styles.line}></View>
        </View>
      );
    };
    const LoginWith = (props) => {
      return (
        <View {...props}>
          <View style={styles.logoLeft}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/logo/facebook.png")}
            />
          </View>
          <View style={styles.logoRight}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/logo/google.png")}
            />
          </View>
        </View>
      );
    };
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          source={require("../assets/images/intro/background1.png")}
          style={styles.image}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <KeyboardAvoidingView // tự scoll khi nhập input
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
              >
                <View style={styles.up}>
                  <LogoScreen />
                  <Text style={styles.title}>Đăng ký</Text>
                </View>
                <View style={styles.center}>
                  <View style={styles.divider}>
                    <TextInput
                      style={styles.line}
                      placeholder="Nhập họ"
                      placeholderTextColor={"#B7B9B8"}
                    ></TextInput>
                    <TextInput
                      style={styles.line}
                      placeholder="Nhập tên"
                      placeholderTextColor={"#B7B9B8"}
                    ></TextInput>
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập email"
                      placeholderTextColor={"#B7B9B8"}
                      textContentType="emaiAddress"
                      keyboardType="email-address"
                    ></TextInput>
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập tên đăng nhập"
                      placeholderTextColor={"#B7B9B8"}
                    ></TextInput>
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập mật khẩu"
                      placeholderTextColor={"#B7B9B8"}
                      secureTextEntry={true}
                    ></TextInput>
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nhập lại mật khẩu"
                      placeholderTextColor={"#B7B9B8"}
                      secureTextEntry={true}
                    ></TextInput>
                  </View>
                  <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.textLogin}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.down}>
                  <View style={styles.divider}>
                    <Text
                      style={{
                        color: Color.white,
                        width: 180,
                        fontFamily: "BalooTamma2-Medium",
                        marginTop: 15,
                      }}
                    >
                      Bạn đã có tài khoản?
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Login");
                      }}
                    >
                      <Text
                        style={{
                          color: "#236BFE",
                          fontFamily: "BalooTamma2-Bold",
                          width: 100,
                          marginTop: 15,
                        }}
                      >
                        Đăng nhập ngay!
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  up: {
    flex: 3,
    top: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  center: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  down: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    marginTop: 52,
    fontSize: 26,
    zIndex: 99,
    textAlign: "center",
    color: Color.white,
    fontFamily: "BalooTamma2-ExtraBold",
  },
  textInput: {
    width: 320,
    height: 45,
    borderColor: "#236BFE",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 21,
    color: Color.white,
    padding: 10,
  },
  loginButton: {
    marginTop: 21,
    width: 320,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#236BFE",
  },
  textLogin: {
    fontSize: 16,
    color: Color.white,
    marginBottom: 0,
    fontFamily: "BalooTamma2-ExtraBold",
  },
  linkText: {
    marginTop: 7,
    alignItems: "flex-end",
    width: 300,
  },
  line: {
    marginTop: 7,
    width: 2000,
    height: 45,
    borderColor: "#236BFE",
    borderWidth: 2,
    borderRadius: 10,
    flex: 2,
    padding: 10,
  },
  textOr: {
    flex: 1,
    textAlign: "center",
    color: Color.white,
    fontFamily: "BalooTamma2-Medium",
  },
  divider: {
    flexDirection: "row",
    width: 320,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  logoLeft: {
    marginEnd: 20,
    alignItems: "flex-end",
  },
  logoRight: {
    marginStart: 20,
    alignItems: "flex-start",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
