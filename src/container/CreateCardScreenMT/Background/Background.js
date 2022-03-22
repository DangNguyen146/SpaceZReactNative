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
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { HuyBackgroundMT, TangBackgroundMT } from "./modules/action";
import ImgToBase64 from "react-native-image-base64";
import { ImageManipulator } from "expo";

const { width: WIDTH } = Dimensions.get("window");

class BackgroundMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroupColor: 0,
      backgroupColorMau: "#567890",
      backgroundCard: null,
    };
  }
  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        backgroupColor: this.props.data.backgroupColor,
        backgroupColorMau: this.props.data.backgroupColorMau,
        backgroundCard: this.props.data.backgroundCard,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.backgroupColor !== this.state.backgroupColor ||
      prevState.backgroundCard !== this.state.backgroundCard
    )
      this.props.addBackground(this.state);
  }
  addImage = async () => {
    this.setState({
      backgroupColor: 0,
    });
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // console.log(_image);
    if (!_image.cancelled) {
      this.setState({
        backgroundCard: _image.uri,
      });
    }
  };
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
            Màu
          </Text>
          <View style={styles.group}>
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
            Nền ảnh
          </Text>
          <View style={styles.group}>
            <View style={imageUploaderStyles.container}>
              {this.state.backgroundCard && (
                <Image
                  source={{ uri: this.state.backgroundCard }}
                  style={{ width: 135, height: 87 }}
                />
              )}

              <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity
                  onPress={this.addImage}
                  style={imageUploaderStyles.uploadBtn}
                >
                  <Text>
                    {this.state.backgroundCard ? "Edit" : "Upload"} Image
                  </Text>
                  <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
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
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 87,
    width: 135,
    backgroundColor: "#efefef",
    position: "relative",
    overflow: "hidden",
    marginStart: 50,
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.listBackgroundCreateMTReducer.backgroundMT,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeBackground: (object) => {
      dispatch(HuyBackgroundMT(object));
    },
    addBackground: (object) => {
      dispatch(TangBackgroundMT(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BackgroundMT);
