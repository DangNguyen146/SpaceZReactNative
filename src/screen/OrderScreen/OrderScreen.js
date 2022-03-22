import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import AppStatusBar from "../../components/AppStatusBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import UserInput from "../../components/UserInput/UserInput";
import Color from "../../theme/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import CardView from "../../components/CardView/CardView";
import { Entypo } from "@expo/vector-icons";
import String from "../../theme/String";
import Validator from "../../utils/Validator/Validator";
import {
  DEFAULT_RULE,
  EMAIL_RULE,
  USER_NAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
} from "../../utils/Validator/rule";
import { getToken } from "../../utils/LocalStorage";
import { URL } from "../../axios/config";
import Axios from "axios";

const { width: WIDTH } = Dimensions.get("window");

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", nameErro: "", address: "", addressErro: "" };
  }
  createProfile = async () => {
    const { name, nameErro, address, addressErro } = this.state;
    if (!Validator(name, DEFAULT_RULE)) {
      this.setState({
        nameErro: String.nameErro,
      });
      return;
    }
    if (!Validator(address, DEFAULT_RULE)) {
      this.setState({
        address: String.addressErro,
      });
      return;
    }
    let data = {
      idCard: this.props.data.id,
      name: this.state.name,
      address: this.state.address,
    };
    const token = await getToken();
    Axios({
      url: URL + "ordercreateCard",
      headers: {
        token: token,
      },
      data: data,
      method: "POST",
    })
      .then((result) => {
        this.props.navigation.navigate("Mess");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const data = this.props.data;
    let dataMT = JSON.parse(data.dataMT);
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
        <ToolBar
          name="MaterialCommunityIcons"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "BalooTamma2-Bold",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Đặt hàng sản phẩm
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "BalooTamma2-Bold",
              alignItems: "center",
              textAlign: "center",
              color: "green",
            }}
          >
            {data.name}
          </Text>
          <View
            style={{
              width: "100%",
              backgroundColor: Color.white,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: 10,
            }}
          >
            <CardView key={1} data={dataMT} mt={1} />
            <View style={{ padding: 5 }}></View>
          </View>
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
                  Tên của bạn
                </Text>
                <View style={{ marginBottom: 5 }}>
                  <MaterialIcons
                    size={24}
                    name="drive-file-rename-outline"
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
                    }}
                  />
                </View>
              </View>
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
                  Địa chỉ của bạn
                </Text>
                <View style={{ marginBottom: 5 }}>
                  <Entypo
                    name="address"
                    size={24}
                    color={Color.gray}
                    style={styles.inputIcon}
                  />

                  <UserInput
                    placeholder={String.addressProfile}
                    placeholderTextColor={Color.black}
                    value={this.state.address}
                    color="black"
                    errorMessage={this.state.addressErro}
                    onChangeText={(address) => {
                      this.setState({
                        address,
                      });
                    }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={{
              borderColor: Color.blue,
              borderWidth: 2,
              paddingHorizontal: 20,
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
              backgroundColor: Color.white,
            }}
            onPress={() => {
              this.createProfile();
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
              Đặt hàng
            </Text>
          </TouchableOpacity>
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
    data: state.listCardEditReducer.itemCard,
  };
};
export default connect(mapStateToProps)(OrderScreen);
