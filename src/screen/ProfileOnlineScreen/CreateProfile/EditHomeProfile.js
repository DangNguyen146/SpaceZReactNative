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
import { connect } from "react-redux";
import Icons from "../../../components/Icons/Icons";

const { width: WIDTH } = Dimensions.get("window");

class EditHomeProfile extends Component {
  // async componentDidMount() {
  // const data = this.props.route.params;
  // console.log(data);
  // }
  render() {
    const dataProfile = this.props.dataProfile;
    const dataProfleUp = this.props.dataProfleUp;
    const renderDataProfileUp = () => {
      return (
        <>
          <Image
            source={{ uri: dataProfleUp.avatarPublic }}
            style={{ width: 200, height: 200, borderRadius: 200 }}
          />
          <Text
            style={{
              color: Color.black,
              fontSize: 20,
              fontFamily: "BalooTamma2-Bold",
            }}
          >
            {dataProfleUp.namePublic}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {dataProfleUp.description}
          </Text>
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </>
      );
    };
    const renderDataProfileCenter = () => {
      const data = this.props.dataProfleCenter;
      return data.map((item, index) => {
        return (
          <Icons
            name={item.name}
            icon={item.icon}
            size={24}
            color={item.color}
            style={styles.icon}
            marginHorizontal={20}
          />
        );
      });
    };
    const renderDataProfileDown = () => {
      const data = this.props.dataProfileDown;
      return data.map((item, index) => {
        return (
          <View style={styles.textInputContainer}>
            <Image style={styles.inputIconImg} source={item.icon} />

            <UserInput
              placeholder={item.title}
              placeholderTextColor={Color.gray}
              textContentType="emaiAddress"
              keyboardType="email-address"
              editable={false}
              selectTextOnFocus={false}
              // value={item.title}
            />
          </View>
        );
      });
    };
    const styleGraphics = this.props.graphics;
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
        <TouchableOpacity
          style={styles.customBoder}
          onPress={() => {
            this.props.navigation.navigate("EditContentUpScreen");
          }}
        >
          {dataProfleUp && dataProfleUp.namePublic ? (
            renderDataProfileUp()
          ) : (
            <>
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
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customBoder}
          onPress={() => {
            this.props.navigation.navigate("EditContentCenterScreen");
          }}
        >
          <View style={styles.customIcon}>
            {this.props.dataProfleCenter && this.props.dataProfleCenter[0] ? (
              renderDataProfileCenter()
            ) : (
              <>
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
              </>
            )}
          </View>
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customBoder}
          onPress={() => {
            this.props.navigation.navigate("EditContentDownScreen");
          }}
        >
          {this.props.dataProfileDown && this.props.dataProfileDown[0] ? (
            renderDataProfileDown()
          ) : (
            <>
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
            </>
          )}
          <Feather
            name="edit"
            size={24}
            color="green"
            style={styles.inputIconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentButtonDeploy}>
          <Text style={{ color: Color.white, fontFamily: "BalooTamma2-Bold" }}>
            Deploy
          </Text>
        </TouchableOpacity>
        <View style={styles.down}>
          <TouchableOpacity
            style={styles.contentDown}
            onPress={() => {
              this.props.navigation.navigate("EditContentGraphiscScreen");
            }}
          >
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
  iconDown: {
    marginRight: 10,
  },
});
const mapStateToProps = (state) => {
  return {
    dataProfile: state.contentReducer.dataProfile,
    dataProfleUp: state.contentReducer.dataProfleUp,
    dataProfleCenter: state.contentReducer.dataProfleCenter,
    dataProfileDown: state.contentReducer.dataProfileDown,
    graphics: state.contentReducer.graphics,
  };
};
export default connect(mapStateToProps)(EditHomeProfile);
