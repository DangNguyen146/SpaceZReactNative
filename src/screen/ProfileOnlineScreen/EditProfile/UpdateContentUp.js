import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";
import UserInput from "../../../components/UserInput/UserInput";
import String from "../../../theme/String";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Validator from "../../../utils/Validator/Validator";
import { IMAGE_RULE, DEFAULT_RULE } from "../../../utils/Validator/rule";
import { AddProfileUpEdit } from "./modules/action";
import { connect } from "react-redux";

class UpdateContentUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarPublic: null,
      avatarPublicError: "",
      namePublic: "",
      errornamePublic: "",
      description: "",
    };
  }
  resetState = () => {
    this.setState({
      avatarPublicError: "",
      errornamePublic: "",
    });
  };
  addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!_image.cancelled) {
      this.setState({
        avatarPublic: _image.uri,
      });
    }
  };
  saveUp = () => {
    const {
      avatarPublic,
      avatarPublicError,
      namePublic,
      errornamePublic,
      description,
    } = this.state;
    if (avatarPublic === null) {
      this.setState({
        avatarPublicError: String.avatarPublicError,
      });
      return;
    }
    if (!Validator(namePublic, DEFAULT_RULE)) {
      this.setState({
        errornamePublic: String.errornamePublic,
      });
      return;
    }
    let data = { avatarPublic, namePublic, description };
    this.props.addContentUp(data);
    this.props.navigation.navigate("UpdateHomeProfileScreen");
  };
  async componentDidMount() {
    const dataProfleUp = this.props.dataProfleUp;
    if (dataProfleUp) {
      this.setState({
        avatarPublic: dataProfleUp.avatarPublic,
        namePublic: dataProfleUp.namePublic,
        description: dataProfleUp.description,
      });
    }
  }
  render() {
    return (
      <View>
        <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
        <ToolBar
          name="MaterialCommunityIcons"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        <Text
          style={{
            color: Color.black,
            fontSize: 20,
            fontFamily: "BalooTamma2-ExtraBold",
            textAlign: "center",
          }}
        >
          Thông tin cơ bản
        </Text>
        <View style={styles.customBoder}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView // tự scoll khi nhập input
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={styles.container}
            >
              <View>
                <Text style={styles.content}>Hình đại diện</Text>
                <View style={{ alignItems: "center" }}>
                  <View style={imageUploaderStyles.container}>
                    {this.state.avatarPublic && (
                      <Image
                        source={{ uri: this.state.avatarPublic }}
                        style={{ width: 200, height: 200 }}
                      />
                    )}

                    <View style={imageUploaderStyles.uploadBtnContainer}>
                      <TouchableOpacity
                        onPress={this.addImage}
                        style={imageUploaderStyles.uploadBtn}
                      >
                        <Text>
                          {this.state.avatarPublic ? "Edit" : "Upload"} Image
                        </Text>
                        <AntDesign name="camera" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {this.state.avatarPublicError ? (
                  <Text style={styles.error}>
                    {this.state.avatarPublicError}
                  </Text>
                ) : null}
              </View>
              <View style={styles.hr} />
              <View>
                <Text style={styles.content}>Tên</Text>
                <View style={styles.textInputContainer}>
                  <MaterialIcons
                    name="drive-file-rename-outline"
                    size={24}
                    color={Color.gray}
                    style={styles.inputIcon}
                  />
                  <UserInput
                    placeholder={String.editName}
                    placeholderTextColor={Color.gray}
                    color={Color.black}
                    value={this.state.namePublic}
                    errorMessage={this.state.errornamePublic}
                    onChangeText={(namePublic) => {
                      this.setState({
                        namePublic,
                      });
                      this.resetState();
                    }}
                  />
                </View>
              </View>
              <View style={styles.hr} />
              <View>
                <Text style={styles.content}>Mô tả thêm</Text>
                <View>
                  <UserInput
                    multiline={true}
                    color={Color.black}
                    value={this.state.description}
                    onChangeText={(description) => {
                      this.setState({
                        description,
                      });
                      this.resetState();
                    }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity
          style={styles.contentButtonDeploy}
          onPress={() => {
            this.saveUp();
          }}
        >
          <Text
            style={{
              color: Color.white,
              fontFamily: "BalooTamma2-Bold",
              textAlign: "center",
            }}
          >
            Lưu
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  customBoder: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    marginBottom: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  content: {
    color: Color.black,
    fontSize: 20,
    fontFamily: "BalooTamma2-Bold",
  },
  hr: {
    borderBottomColor: Color.gray,
    borderBottomWidth: 2,
    marginTop: 15,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  contentButtonDeploy: {
    backgroundColor: Color.blue,
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
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  error: {
    color: Color.pinkred,
    marginTop: 5,
    fontSize: 16,
    left: 15,
  },
});
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 150,
    width: 150,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
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
    dataProfleUp: state.contentReducerEdit.dataProfleUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContentUp: (data) => {
      dispatch(AddProfileUpEdit(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateContentUp);
