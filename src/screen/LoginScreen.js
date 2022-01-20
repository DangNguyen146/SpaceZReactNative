import React, { Component } from "react";

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
  Dimensions,
} from "react-native";

import Color from "../theme/Color";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LogoScreen from "../components/LogoScreen/LogoScreen";

let customFonts = {
  "BalooTamma2-ExtraBold": require("../assets/font/BalooTamma2-ExtraBold.ttf"),
  "BalooTamma2-Bold": require("../assets/font/BalooTamma2-Bold.ttf"),
  "BalooTamma2-Medium": require("../assets/font/BalooTamma2-Medium.ttf"),
  "BalooTamma2-Regular": require("../assets/font/BalooTamma2-Regular.ttf"),
  "BalooTamma2-SemiBold": require("../assets/font/BalooTamma2-SemiBold.ttf"),
};
import Validator from "../utils/Validator/Validator";
import {
  DEFAULT_RULE,
  EMAIL_RULE,
  USER_NAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
} from "../utils/Validator/rule";
import UserInput from "../components/UserInput/UserInput";
import String from "../theme/String";

const { width: WIDTH } = Dimensions.get("window");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      secureTextEntry: true,
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  resetState = () => {
    this.setState({
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      userNameError: "",
      passwordError: "",
      curentpasswordError: "",
    });
  };
  login = () => {
    const { email, emailError, password, passwordError } = this.state;
    if (!Validator(email, DEFAULT_RULE)) {
      this.setState({
        emailError: String.emailError,
      });
      return;
    }
    if (!Validator(email, EMAIL_RULE)) {
      this.setState({
        emailError: String.emailError1,
      });
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      this.setState({
        passwordError: String.passwordError,
      });
      return;
    }
    this.props.navigation.replace("HomeScreen");
  };
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
                  <Text style={styles.title}>{String.loginCap}</Text>
                </View>
                <View style={styles.center}>
                  <View style={styles.textInputContainer}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.palceEmail}
                      placeholderTextColor={Color.gray}
                      textContentType="emaiAddress"
                      keyboardType="email-address"
                      errorMessage={this.state.emailError}
                      onChangeText={(email) => {
                        this.setState({
                          email,
                        });
                        this.resetState();
                      }}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <AntDesign
                      name="lock"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.placePassword}
                      placeholderTextColor={Color.gray}
                      secureTextEntry={this.state.secureTextEntry}
                      errorMessage={this.state.passwordError}
                      onChangeText={(password) => {
                        this.setState({
                          password,
                        });
                        this.resetState();
                      }}
                    />
                    <TouchableOpacity
                      style={styles.touchPassword}
                      onPress={() => {
                        this.setState({
                          secureTextEntry: !this.state.secureTextEntry,
                        });
                      }}
                    >
                      <AntDesign
                        name="eye"
                        size={24}
                        color={Color.gray}
                        style={styles.inputIconPassword}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.linkText}>
                    <Text style={{ color: Color.blue }}>
                      {String.forgetPassword}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {
                      this.login();
                    }}
                  >
                    <Text style={styles.textLogin}>{String.login}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.down}>
                  <Divider style={styles.divider}></Divider>
                  <LoginWith style={styles.divider}></LoginWith>
                  <View style={styles.divider}>
                    <Text
                      style={{
                        color: Color.white,
                        width: 180,
                        fontFamily: "BalooTamma2-Medium",
                        marginTop: 15,
                      }}
                    >
                      {String.loginqes}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Signin");
                      }}
                    >
                      <Text
                        style={{
                          color: Color.blue,
                          fontFamily: "BalooTamma2-Bold",
                          width: 100,
                          marginTop: 15,
                        }}
                      >
                        {String.signinNgay}
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
    flex: 4,
    top: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  center: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  down: {
    flex: 2,
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
    width: WIDTH - 55,
    height: 45,
    borderColor: Color.blue,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    color: Color.white,
    padding: 10,
    paddingLeft: 45,
    marginHorizontal: 25,
    zIndex: 3,
  },
  loginButton: {
    marginTop: 21,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blue,
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
    width: WIDTH - 55,
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: Color.white,
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
  inputIcon: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  touchPassword: {
    position: "absolute",
    top: 30,
    right: 17,
    zIndex: 5,
  },
});
