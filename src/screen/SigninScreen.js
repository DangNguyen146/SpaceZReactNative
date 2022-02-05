import React, { Component } from "react";
import LogoScreen from "../components/LogoScreen/LogoScreen";
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
  ToastAndroid,
} from "react-native";

import Color from "../theme/Color";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import UserInput from "../components/UserInput/UserInput";
import Validator from "../utils/Validator/Validator";
import {
  DEFAULT_RULE,
  EMAIL_RULE,
  USER_NAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
  CURENT_PASSWORD_RULE,
} from "../utils/Validator/rule";
import String from "../theme/String";
import { userRegister, checkInternetConnection } from "../axios/ServerRequest";
import LoadingButton from "../components/LoadingButton";

let customFonts = {
  "BalooTamma2-ExtraBold": require("../assets/font/BalooTamma2-ExtraBold.ttf"),
  "BalooTamma2-Bold": require("../assets/font/BalooTamma2-Bold.ttf"),
  "BalooTamma2-Medium": require("../assets/font/BalooTamma2-Medium.ttf"),
  "BalooTamma2-Regular": require("../assets/font/BalooTamma2-Regular.ttf"),
  "BalooTamma2-SemiBold": require("../assets/font/BalooTamma2-SemiBold.ttf"),
};
const { width: WIDTH } = Dimensions.get("window");

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fontsLoaded: false,
      secureTextEntry1: true,
      secureTextEntry2: true,
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      userName: "",
      userNameError: "",
      password: "",
      passwordError: "",
      curentpassword: "",
      curentpasswordError: "",
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  async componentDidMount() {
    checkInternetConnection();
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
  showToast = (message) => {
    if (Platform.OS != "android") {
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };
  register = () => {
    const {
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      email,
      emailError,
      userName,
      userNameError,
      password,
      passwordError,
      curentpassword,
      curentpasswordError,
    } = this.state;
    if (!Validator(firstName, DEFAULT_RULE)) {
      this.setState({
        firstNameError: String.firstNameError,
      });
      return;
    }
    if (!Validator(lastName, DEFAULT_RULE)) {
      this.setState({
        lastNameError: String.lastNameError,
      });
      return;
    }
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
    if (!Validator(userName, DEFAULT_RULE)) {
      this.setState({
        userNameError: String.userNameError,
      });
      return;
    }
    if (!Validator(userName, USER_NAME_RULE)) {
      this.setState({
        userNameError: String.userNameError1,
      });
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      this.setState({
        passwordError: String.passwordError,
      });
      return;
    }
    if (!Validator(curentpassword, DEFAULT_RULE)) {
      this.setState({
        curentpasswordError: String.curentpasswordError,
      });
      return;
    }
    if (!Validator(password, CURENT_PASSWORD_RULE, curentpassword)) {
      this.setState({
        curentpasswordError: String.curentpasswordError1,
      });
      return;
    }
    this.setState({ loading: true });
    userRegister(firstName, lastName, email, userName, password)
      .then((response) => {
        let data = response.data;
        if (data) {
          this.showToast(data.mess);
          this.props.navigation.replace("EmailVery");
        } else {
          this.showToast(data.mess);
        }

        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
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
                  <Text style={styles.title}>{String.signinCap}</Text>
                </View>
                <View style={styles.center}>
                  <View style={styles.textInputContainer}>
                    <Feather
                      name="plus-square"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.placeFirtName}
                      placeholderTextColor={Color.gray}
                      size={24}
                      maxLength={50}
                      value={this.state.firstName}
                      errorMessage={this.state.firstNameError}
                      onChangeText={(firstName) => {
                        this.setState({
                          firstName,
                        });
                        this.resetState();
                      }}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Feather
                      name="plus-square"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.placeLastName}
                      size={24}
                      maxLength={50}
                      placeholderTextColor={Color.gray}
                      errorMessage={this.state.lastNameError}
                      onChangeText={(lastName) => {
                        this.setState({
                          lastName,
                        });
                        this.resetState();
                      }}
                    />
                  </View>
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
                    <Feather
                      name="user"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.placeUserName}
                      placeholderTextColor={Color.gray}
                      errorMessage={this.state.userNameError}
                      onChangeText={(userName) => {
                        this.setState({
                          userName,
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
                      secureTextEntry={this.state.secureTextEntry1}
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
                          secureTextEntry1: !this.state.secureTextEntry1,
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
                  <View style={styles.textInputContainer}>
                    <AntDesign
                      name="lock"
                      size={24}
                      color={Color.gray}
                      style={styles.inputIcon}
                    />
                    <UserInput
                      placeholder={String.placeCurrentPaswword}
                      placeholderTextColor={Color.gray}
                      secureTextEntry={this.state.secureTextEntry2}
                      errorMessage={this.state.curentpasswordError}
                      onChangeText={(curentpassword) => {
                        this.setState({
                          curentpassword,
                        });
                        this.resetState();
                      }}
                    />
                    <TouchableOpacity
                      style={styles.touchPassword}
                      onPress={() => {
                        this.setState({
                          secureTextEntry2: !this.state.secureTextEntry2,
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
                  {/* <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {
                      this.register();
                    }}
                  >
                    <Text style={styles.textLogin}>{String.sign}</Text>
                  </TouchableOpacity> */}

                  <View style={styles.loginButton}>
                    <LoadingButton
                      title={String.sign}
                      loading={this.state.loading}
                      onPress={() => {
                        this.register();
                      }}
                    />
                  </View>
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
                      {String.siginqes}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Login");
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
                        {String.logingNgay}
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
    marginTop: 10,
    fontSize: 26,
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
    marginTop: 21,
    color: Color.white,
    padding: 10,
    paddingLeft: 45,
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
    marginTop: 7,
    width: WIDTH - 55,
    height: 45,
    borderColor: Color.blue,
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
    width: WIDTH - 55,
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
    top: 10,
    left: 10,
  },
  touchPassword: {
    position: "absolute",
    top: 30,
    right: 17,
    zIndex: 5,
  },
  textInputContainer: {
    marginTop: 21,
  },
});
