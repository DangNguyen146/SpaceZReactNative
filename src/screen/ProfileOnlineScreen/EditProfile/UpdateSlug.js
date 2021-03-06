import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserInput from "../../../components/UserInput/UserInput";
import String from "../../../theme/String";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LoadingButton from "../../../components/LoadingButton";
import Validator from "../../../utils/Validator/Validator";
import {
  DEFAULT_RULE,
  EMAIL_RULE,
  USER_NAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
} from "../../../utils/Validator/rule";
import { AddContentEdit } from "./modules/action";
import { connect } from "react-redux";
const { width: WIDTH } = Dimensions.get("window");

class UpdateSlug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameErro: "",
      slug: "",
      slugErro: "",
      status: "true",
    };
  }
  async componentDidMount() {
    this.setState({
      name: this.props.dataProfile.name,
      slug: this.props.dataProfile.slug,
      status: this.props.dataProfile.status,
    });
  }
  resetState = () => {
    this.setState({
      nameErro: "",
      slugErro: "",
    });
  };
  createProfile = () => {
    const { name, nameErro, slug, slugErro, status } = this.state;
    if (!Validator(name, DEFAULT_RULE)) {
      this.setState({
        nameErro: String.nameErro,
      });
      return;
    }
    if (!Validator(slug, DEFAULT_RULE)) {
      this.setState({
        slugErro: String.slugErro,
      });
      return;
    }
    let data = { name: name, slug: slug, status: status, idTemplate: null };
    this.props.addContent(data);
    this.props.navigation.navigate("UpdateHomeProfileScreen");
  };
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
            textAlign: "center",
            color: Color.black,
            fontSize: 20,
            fontFamily: "BalooTamma2-ExtraBold",
          }}
        >
          Trang ???????ng d???n
        </Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView // t??? scoll khi nh???p input
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View
              style={{
                backgroundColor: Color.white,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "BalooTamma2-Bold",
                  fontSize: 18,
                  marginBottom: 0,
                }}
              >
                T??n
              </Text>
              <View style={{ marginBottom: 5 }}>
                <MaterialIcons
                  name="web"
                  size={24}
                  color={Color.gray}
                  style={styles.inputIcon}
                />
                <UserInput
                  placeholder={String.nameProfile}
                  placeholderTextColor={Color.gray}
                  value={this.state.name}
                  color="black"
                  errorMessage={this.state.nameErro}
                  onChangeText={(name) => {
                    this.setState({
                      name,
                    });
                    this.resetState();
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: Color.white,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "BalooTamma2-Bold",
                  fontSize: 18,
                  marginBottom: 0,
                }}
              >
                URL m???c ?????nh
              </Text>
              <View style={{ marginBottom: 5 }}>
                <Text size={24} color={Color.gray} style={styles.inputIcon}>
                  SpaceZ://
                </Text>
                <UserInput
                  placeholder={String.placeSlugProfile}
                  placeholderTextColor={Color.gray}
                  paddingLeft={90}
                  color="black"
                  value={this.state.slug}
                  errorMessage={this.state.slugErro}
                  onChangeText={(slug) => {
                    this.setState({
                      slug,
                    });
                    this.resetState();
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "BalooTamma2-Bold",
              fontSize: 18,
              marginBottom: 0,
            }}
          >
            C??ng khai
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              value={this.state.status}
              onValueChange={() => {
                this.setState({
                  status: !this.state.status,
                });
              }}
              style={{
                marginRight: 15,
                marginLeft: 5,
                marginVertical: 10,
              }}
            />
            <Text>C??ng khai ???????ng d???n n??y cho m???i ng?????i</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              marginTop: 21,
              width: WIDTH - 55,
              height: 45,
              borderRadius: 10,

              backgroundColor: Color.blue,
            }}
          >
            <LoadingButton
              title={String.continue}
              loading={this.state.loading}
              onPress={() => {
                this.createProfile();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputIcon: {
    position: "absolute",
    top: 12,
    left: 10,
  },
});
const mapStateToProps = (state) => {
  return {
    dataProfile: state.contentReducerEdit.dataProfile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContent: (data) => {
      dispatch(AddContentEdit(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateSlug);
