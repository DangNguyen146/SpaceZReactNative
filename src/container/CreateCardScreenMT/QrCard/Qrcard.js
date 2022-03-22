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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserInput from "../../../components/UserInput/UserInput";
import String from "../../../theme/String";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { HuyQrMT, TangQrMT } from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class QrcardMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      qrX: 10,
      qrY: 10,
      qrSkew: 10,
    };
  }
  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        link: this.props.data.link,

        qrX: this.props.data.qrX,
        qrY: this.props.data.qrY,
        qrSkew: this.props.data.qrSkew,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.link !== this.state.link ||
      prevState.qrX !== this.state.qrX ||
      prevState.qrY !== this.state.qrY ||
      prevState.qrSkew !== this.state.qrSkew
    )
      this.props.addQr(this.state);
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontFamily: "BalooTamma2-Bold",
            marginStart: 20,
          }}
        >
          Link qr
        </Text>
        <View style={styles.textInputContainer}>
          <Feather
            name="user"
            size={24}
            color={Color.gray}
            style={styles.inputIcon}
          />
          <UserInput
            placeholder={String.qr}
            placeholderTextColor={Color.gray}
            value={this.props.data.link ? this.props.data.link : ""}
            color="#000"
            onChangeText={(link) => {
              this.setState({
                link,
              });
            }}
          />
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
              value={this.props.data.textX ? this.props.data.textX : 0}
              maximumValue={100}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#0F6666"
              onValueChange={(val) => {
                this.setState({
                  qrX: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.qrX}
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
              maximumValue={100}
              value={this.props.data.textY ? this.props.data.textY : 0}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#0F6666"
              onValueChange={(val) => {
                this.setState({
                  qrY: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.qrY}
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
          <View style={styles.group}>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              step={5}
              maximumValue={100}
              value={this.props.data.skew ? this.props.data.skew : 0}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#0F6666"
              onValueChange={(val) => {
                this.setState({
                  qrSkew: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.qrSkew}
            </Text>
          </View>
        </View>
      </View>
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
    data: state.listQrCreateMTReducer.qrMT,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeQr: (object) => {
      dispatch(HuyQrMT(object));
    },
    addQr: (object) => {
      dispatch(TangQrMT(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QrcardMT);
