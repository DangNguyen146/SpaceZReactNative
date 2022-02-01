import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserInput from "../../../components/UserInput/UserInput";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");

export default class EditHomeProfile extends Component {
  async componentDidMount() {
    const data = this.props.route.params;
    console.log(data);
  }
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
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
          Tùy chỉnh
        </Text>
        <TouchableOpacity style={styles.customBoder}>
          <Image
            source={require("../../../assets/images/profile/avatarUser.png")}
          />
          <Text
            style={{
              color: Color.black,
              fontSize: 20,
              fontFamily: "BalooTamma2-Bold",
            }}
          >
            SpaceZ
          </Text>
          <Text style={{ textAlign: "center" }}>
            Send all your content to ypur follwers throught one smart link
          </Text>
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBoder}>
          <View style={styles.customIcon}>
            <FontAwesome5
              name="facebook-square"
              size={24}
              color="black"
              style={styles.icon}
            />
            <FontAwesome5
              name="instagram-square"
              size={24}
              color="black"
              style={styles.icon}
            />
            <FontAwesome5
              name="twitter"
              size={24}
              color="black"
              style={styles.icon}
            />
            <FontAwesome5
              name="facebook-messenger"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBoder}>
          <View style={styles.textInputContainer}>
            <Foundation
              name="web"
              size={24}
              color={Color.gray}
              style={styles.inputIcon}
            />
            <UserInput
              placeholder="Địa chỉ website"
              placeholderTextColor={Color.gray}
              textContentType="emaiAddress"
              keyboardType="email-address"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Foundation
              name="web"
              size={24}
              color={Color.gray}
              style={styles.inputIcon}
            />
            <UserInput
              placeholder="Địa chỉ website"
              placeholderTextColor={Color.gray}
              textContentType="emaiAddress"
              keyboardType="email-address"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Foundation
              name="web"
              size={24}
              color={Color.gray}
              style={styles.inputIcon}
            />
            <UserInput
              placeholder="Địa chỉ website"
              placeholderTextColor={Color.gray}
              textContentType="emaiAddress"
              keyboardType="email-address"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </TouchableOpacity>
        <View style={styles.down}>
          <TouchableOpacity style={styles.contentDown}>
            <FontAwesome5
              name="images"
              size={24}
              color="#FF007A"
              style={styles.iconDown}
            />
            <Text>Chỉnh nền</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentDown}>
            <Ionicons
              name="flash-sharp"
              size={24}
              color="#FFE600"
              style={styles.iconDown}
            />
            <Text>Chỉnh hiệu ứng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  customBoder: {
    width: WIDTH - 10,
    borderWidth: 2,
    borderColor: Color.blue,
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    borderStyle: "dashed",
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
