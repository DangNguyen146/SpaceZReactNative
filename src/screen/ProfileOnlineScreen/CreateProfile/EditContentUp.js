import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";

const { width: WIDTH } = Dimensions.get("window");

export default class EditContentUp extends Component {
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
          }}
        >
          Thông tin cơ bản
        </Text>
      </View>
    );
  }
}
