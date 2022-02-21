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
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import Icons from "../../../components/Icons/Icons";
import AppLoading from "expo-app-loading";

const { width: WIDTH } = Dimensions.get("window");

class PreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProfile: {},
      dataProfleUp: {},
      dataProfleCenter: [],
      dataProfileDown: [],
      graphicsNen: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const dataProfile = this.props.dataProfile;
    const dataProfleUp = this.props.dataProfleUp;
    const dataProfleCenter = this.props.dataProfleCenter;
    const dataProfileDown = this.props.dataProfileDown;
    const datastyleGraphics = this.props.graphicsNen;
    this.setState({
      dataProfile,
      dataProfleUp: dataProfleUp,
      dataProfleCenter,
      dataProfileDown,
      graphicsNen: datastyleGraphics,
      loading: false,
    });
  }
  renderDataProfileUp = () => {
    return (
      <>
        <Image
          source={{ uri: this.state.dataProfleUp.avatarPublic }}
          style={{ width: 200, height: 200, borderRadius: 200 }}
        />
        <Text
          style={{
            color: this.state.graphicsNen[0].colorTitle,
            fontSize: 20,
            fontFamily: "BalooTamma2-Bold",
          }}
        >
          {this.state.dataProfleUp.namePublic}
        </Text>
        <Text
          style={{
            color: this.state.graphicsNen[0].colorDiscription,
            textAlign: "center",
          }}
        >
          {this.state.dataProfleUp.description}
        </Text>
      </>
    );
  };
  renderDataProfileCenter = () => {
    return this.state.dataProfleCenter.map((item, index) => {
      return (
        <Icons
          name={item.name}
          icon={item.icon}
          size={24}
          color={this.state.graphicsNen[0].colorIcons}
          style={styles.icon}
          marginHorizontal={20}
        />
      );
    });
  };
  renderDataProfileDown = () => {
    console.log(this.state.dataProfileDown);
    return this.state.dataProfileDown.map((item, index) => {
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
            value={item.title}
            borderColor={this.state.graphicsNen[0].infoBorder}
          />
        </View>
      );
    });
  };
  render() {
    if (this.state.loading) return <AppLoading />;
    else
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
          <View
            style={{
              width: WIDTH - 10,
              borderWidth: this.state.graphicsNen[0].borderWidth,
              borderRadius: this.state.graphicsNen[0].borderRadius,
              borderStyle: this.state.graphicsNen[0].borderStyle,
              borderColor: this.state.graphicsNen[0].borderColor,
              backgroundColor: this.state.graphicsNen[0].backgroundColor,
              alignItems: "center",
              paddingVertical: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate("EditContentUpScreen");
            }}
          >
            {this.state.dataProfleUp && this.state.dataProfleUp.namePublic ? (
              this.renderDataProfileUp()
            ) : (
              <>
                <Image
                  source={require("../../../assets/images/profile/avatarUser.png")}
                />
                <Text
                  style={{
                    color: this.state.graphicsNen[0].colorTitle,
                    fontSize: 20,
                    fontFamily: "BalooTamma2-Bold",
                  }}
                >
                  SpaceZ
                </Text>
                <Text
                  style={{
                    color: this.state.graphicsNen[0].colorDiscription,
                    textAlign: "center",
                  }}
                >
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
          </View>
          <View
            style={{
              width: WIDTH - 10,
              borderWidth: this.state.graphicsNen[0].borderWidth,
              borderRadius: this.state.graphicsNen[0].borderRadius,
              borderStyle: this.state.graphicsNen[0].borderStyle,
              borderColor: this.state.graphicsNen[0].borderColor,
              backgroundColor: this.state.graphicsNen[0].backgroundColor,
              alignItems: "center",
              paddingVertical: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate("EditContentCenterScreen");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.props.dataProfleCenter && this.props.dataProfleCenter[0] ? (
                this.renderDataProfileCenter()
              ) : (
                <>
                  <FontAwesome5
                    name="facebook-square"
                    size={24}
                    color={this.state.graphicsNen[0].colorIcons}
                    style={styles.icon}
                  />
                  <FontAwesome5
                    name="instagram-square"
                    size={24}
                    color={this.state.graphicsNen[0].colorIcons}
                    style={styles.icon}
                  />
                  <FontAwesome5
                    name="twitter"
                    size={24}
                    color={this.state.graphicsNen[0].colorIcons}
                    style={styles.icon}
                  />
                  <FontAwesome5
                    name="facebook-messenger"
                    size={24}
                    color={this.state.graphicsNen[0].colorIcons}
                    style={styles.icon}
                  />
                </>
              )}
            </View>
          </View>
          <View
            style={{
              width: WIDTH - 10,
              borderWidth: this.state.graphicsNen[0].borderWidth,
              borderRadius: this.state.graphicsNen[0].borderRadius,
              borderStyle: this.state.graphicsNen[0].borderStyle,
              borderColor: this.state.graphicsNen[0].borderColor,
              backgroundColor: this.state.graphicsNen[0].backgroundColor,
              alignItems: "center",
              paddingVertical: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate("EditContentDownScreen");
            }}
          >
            {this.props.dataProfileDown && this.props.dataProfileDown[0] ? (
              this.renderDataProfileDown()
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
                    borderColor={
                      this.state.this.state.graphicsNen[0].infoBorder
                    }
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
                    borderColor={
                      this.state.this.state.graphicsNen[0].infoBorder
                    }
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
                    borderColor={
                      this.state.this.state.graphicsNen[0].infoBorder
                    }
                  />
                </View>
              </>
            )}
          </View>

          <View style={styles.down}>
            <TouchableOpacity
              style={styles.contentDown}
              onPress={() => {
                this.props.navigation.navigate("UpdateHomeProfileScreen");
              }}
            >
              <AntDesign
                name="edit"
                size={24}
                color="green"
                style={styles.iconDown}
              />

              <Text>Chỉnh sủa thông tin</Text>
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
    dataProfile: state.contentReducerEdit.dataProfile,
    dataProfleUp: state.contentReducerEdit.dataProfleUp,
    dataProfleCenter: state.contentReducerEdit.dataProfleCenter,
    dataProfileDown: state.contentReducerEdit.dataProfileDown,
    graphicsNen: state.contentReducerEdit.graphicsNen,
  };
};
export default connect(mapStateToProps)(PreView);
