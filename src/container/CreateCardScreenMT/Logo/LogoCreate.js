import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import Color from "../../../theme/Color";
import { connect } from "react-redux";
import { HuyLogoMT, TangLogoMT } from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class LogoCreateMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagelogo: 1,
      logoX: 0,
      logoY: 0,
      skew: 40,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imagelogo !== this.state.imagelogo ||
      prevState.logoX !== this.state.logoX ||
      prevState.logoY !== this.state.logoY ||
      prevState.skew !== this.state.skew
    )
      this.props.addLogo(this.state);
  }
  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        imagelogo: this.props.data.imagelogo,
        logoX: this.props.data.logoX,
        logoY: this.props.data.logoY,
        skew: this.props.data.skew,
      });
    }
  }
  render() {
    return (
      <>
        <View>
          <Text
            style={{
              fontFamily: "BalooTamma2-Bold",
              marginStart: 20,
            }}
          >
            Loại logo
          </Text>
          <View style={styles.group}>
            <TouchableOpacity
              style={{
                borderColor: "green",
                borderWidth: this.state.imagelogo == 1 ? 1 : 0,
              }}
              onPress={() => {
                this.setState({
                  imagelogo: 1,
                });
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={require("../../../assets/images/logo/Logo.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: "green",
                borderWidth: this.state.imagelogo == 2 ? 1 : 0,
              }}
              onPress={() => {
                this.setState({
                  imagelogo: 2,
                });
              }}
            >
              <Image
                onPress={() => {
                  this.setState({
                    imagelogo: 2,
                  });
                }}
                style={{
                  width: 100,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={require("../../../assets/images/logo/logo-image.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "green",
                borderWidth: this.state.imagelogo == 3 ? 1 : 0,
              }}
              onPress={() => {
                this.setState({
                  imagelogo: 3,
                });
              }}
            >
              <Image
                onPress={() => {
                  this.setState({
                    imagelogo: 3,
                  });
                }}
                style={{
                  width: 100,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={require("../../../assets/images/logo/logo-text.png")}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "BalooTamma2-Bold",
              marginStart: 20,
            }}
          >
            Vị trí
          </Text>
          <View style={styles.group}>
            <View style={styles.group}>
              <Text
                style={{
                  right: 0,
                  marginStart: 30,
                  fontWeight: "500",
                }}
              >
                Theo trục X
              </Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                step={5}
                value={this.props.data.logoX ? this.props.data.logoX : 0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#0F6666"
                onValueChange={(val) => {
                  this.setState({
                    logoX: val,
                  });
                }}
              />
              <Text
                style={{
                  right: 0,
                  marginStart: "50%",
                }}
              >
                Giá trị: {this.state.logoX}
              </Text>
            </View>
            <View style={styles.group}>
              <Text
                style={{
                  right: 0,
                  marginStart: 30,
                  fontWeight: "500",
                }}
              >
                Theo trục Y
              </Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                step={5}
                value={this.props.data.logoY ? this.props.data.logoY : 0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#0F6666"
                onValueChange={(val) => {
                  this.setState({
                    logoY: val,
                  });
                }}
              />
              <Text
                style={{
                  right: 0,
                  marginStart: "50%",
                }}
              >
                Giá trị: {this.state.logoY}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "BalooTamma2-Bold",
              marginStart: 20,
            }}
          >
            Kích thước
          </Text>
          <View style={styles.group}>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={40}
              step={5}
              value={this.props.data.skew ? this.props.data.skew : 0}
              maximumValue={400}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#0F6666"
              onValueChange={(val) => {
                this.setState({
                  skew: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.skew}
            </Text>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "34%",
  },
  group: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    textAlign: "center",
  },
  customBoder: {
    width: WIDTH - 10,
  },
  customIcon: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon: {
    marginHorizontal: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  inputIconImg: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  textInputContainer: {
    marginBottom: 10,
  },
  inputIconEdit: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  down: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 40,
  },
  iconDown: {
    marginRight: 10,
  },
  contentButtonDeploy: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Color.blue,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  items: {
    alignItems: "center",
    padding: 10,
  },
  down: {
    flexDirection: "row",
    flexWrap: "wrap",
    // position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  contentDown: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Color.white,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  iconDown: {
    marginRight: 10,
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.listLogoCreateMTReducer.logoMT,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeLogo: (object) => {
      dispatch(HuyLogoMT(object));
    },
    addLogo: (object) => {
      dispatch(TangLogoMT(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogoCreateMT);
