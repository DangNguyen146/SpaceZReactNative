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
import { HuyNameMT, TangNameMT } from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class NameCreateMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      backgroupColor: 0,
      backgroupColorMau: "#000",
      textX: 0,
      textY: 0,
      textSkew: 10,
    };
  }
  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        name: this.props.data.name,
        backgroupColor: this.props.data.backgroupColor,
        backgroupColorMau: this.props.data.backgroupColorMau,
        textX: this.props.data.textX,
        textY: this.props.data.textY,
        textSkew: this.props.data.textSkew,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.backgroupColor !== this.state.backgroupColor ||
      prevState.textX !== this.state.textX ||
      prevState.textY !== this.state.textY ||
      prevState.textSkew !== this.state.textSkew
    )
      this.props.addName(this.state);
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
          Tên của bạn
        </Text>
        <View style={styles.textInputContainer}>
          <Feather
            name="user"
            size={24}
            color={Color.gray}
            style={styles.inputIcon}
          />
          <UserInput
            placeholder={String.placeLastName}
            placeholderTextColor={Color.gray}
            value={this.props.data.name ? this.props.data.name : ""}
            color="#000"
            onChangeText={(name) => {
              this.setState({
                name,
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
          Màu
        </Text>
        <View style={styles.group}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#fff",
              marginStart: 10,
              borderColor: this.state.backgroupColor == -2 ? "green" : "dark",
              borderWidth: this.state.backgroupColor == -2 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColor: -2,
                backgroupColorMau: "#fff",
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#000",
              marginStart: 10,
              borderColor: "green",
              borderWidth: this.state.backgroupColor == -1 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColor: -1,
                backgroupColorMau: "#000",
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#123456",
              marginStart: 10,
              borderColor: "green",
              borderWidth: this.state.backgroupColor == 1 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColor: 1,
                backgroupColorMau: "#123456",
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#ff00ff",
              marginStart: 10,
              borderColor: "green",
              borderWidth: this.state.backgroupColor == 2 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColor: 2,
                backgroupColorMau: "#ff00ff",
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#009dff",
              marginStart: 10,
              borderColor: "green",
              borderWidth: this.state.backgroupColor == 3 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColorMau: "#009dff",
                backgroupColor: 3,
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "#09ff00",
              marginStart: 10,
              borderColor: "green",
              borderWidth: this.state.backgroupColor == 4 ? 1 : 0,
            }}
            onPress={() => {
              this.setState({
                backgroupColorMau: "#09ff00",
                backgroupColor: 4,
                backgroundCard: null,
              });
            }}
          ></TouchableOpacity>
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
                  textX: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.textX}
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
                  textY: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.textY}
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
                  textSkew: val,
                });
              }}
            />
            <Text
              style={{
                right: 0,
                marginStart: "50%",
              }}
            >
              Giá trị: {this.state.textSkew}
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
    data: state.listNameCreateMTReducer.nameMT,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeName: (object) => {
      dispatch(HuyNameMT(object));
    },
    addName: (object) => {
      dispatch(TangNameMT(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameCreateMT);
