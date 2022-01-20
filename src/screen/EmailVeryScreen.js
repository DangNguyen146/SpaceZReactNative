import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import LogoScreen from "../components/LogoScreen/LogoScreen";
import Color from "../theme/Color";
const { width: WIDTH } = Dimensions.get("window");
export default class EmailVeryScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/intro/background1.png")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.up}>
            <LogoScreen style={{}} />
          </View>
          <View style={styles.center}>
            <Text style={styles.title}>XÁC NHẬN TÀI KHOẢN</Text>
            <Text style={styles.titleSmall}>
              Kiểm tra email của bạn và nhấp vào liên kết để kích hoạt tài khoản
              của bạn
            </Text>
            <Image
              style={styles.imageSendMail}
              source={require("../assets/images/intro/sendmail_1.png")}
            />
          </View>
          <View style={styles.down}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.textLogin}>Tiếp tục</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Gửi lại email xác thực</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  imageSendMail: {
    transform: [{ rotate: "30deg" }],
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  up: {
    flex: 3,
    top: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 26,
    zIndex: 99,
    textAlign: "center",
    color: Color.white,
    fontFamily: "BalooTamma2-ExtraBold",
  },
  center: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  down: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleSmall: {
    width: WIDTH - 55,
    color: Color.white,
    textAlign: "center",
    fontFamily: "BalooTamma2-Regular",
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
    color: Color.blue,
    fontFamily: "BalooTamma2-Bold",
    textAlign: "center",
    width: WIDTH - 55,
    marginTop: 15,
  },
});
