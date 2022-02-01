import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import AppStatusBar from "../../components/AppStatusBar";
import LoadingButton from "../../components/LoadingButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import String from "../../theme/String";

const { width: WIDTH } = Dimensions.get("window");

export default class ProfileOnlineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  createProfile = () => {
    this.props.navigation.navigate("CreateProfile");
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
        <ToolBar
          name="MaterialCommunityIcons"
          // title="Create profile online"
          // icon="face-profile"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        <View
          style={{
            // flex: 1,
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Image
            source={require("../../assets/images/profile/linkProfile.png")}
          />
          <View style={styles.loginButton}>
            <LoadingButton
              title={String.createProfile}
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
  loginButton: {
    marginTop: 21,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blue,
  },
});
