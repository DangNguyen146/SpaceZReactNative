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
import AppStatusBar from "../../components/AppStatusBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserInput from "../../components/UserInput/UserInput";
import String from "../../theme/String";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LoadingButton from "../../components/LoadingButton";
import Validator from "../../utils/Validator/Validator";
import {
  DEFAULT_RULE,
  EMAIL_RULE,
  USER_NAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
} from "../../utils/Validator/rule";
import { connect } from "react-redux";
import { HuyNameCard, TangNameCard } from "./modules/action";
const { width: WIDTH } = Dimensions.get("window");

class CreateNameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameErro: "",

      status: true,
    };
  }
  resetState = () => {
    this.setState({
      nameErro: "",
      slugErro: "",
    });
  };
  createCard = () => {
    const { name, nameErro } = this.state;
    if (!Validator(name, DEFAULT_RULE)) {
      this.setState({
        nameErro: String.nameErro,
      });
      return;
    }
    this.props.addNameCard(this.state);
    this.props.navigation.navigate("CreateCardMTScreen");
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
          Tên card
        </Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView // tự scoll khi nhập input
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
                Tên
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
            Công khai
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
            <Text>Công khai thiết kế này cho mọi người</Text>
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
                this.createCard();
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
    data: state.listNameCardCreateMSReducer.itemNameCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeNameCard: (object) => {
      dispatch(HuyNameCard(object));
    },
    addNameCard: (object) => {
      dispatch(TangNameCard(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateNameCard);
