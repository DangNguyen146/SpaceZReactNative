import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
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
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import ScrollableTabBar from "@valdio/react-native-scrollable-tabview/lib/ScrollableTabBar";
import { Ellipse_DATA, RECTANGLE_DATA } from "../data/base/BaseGraphics";
import Rectangle from "../../../components/RenderGraphics/Rectangle";
import Ellipse from "../../../components/RenderGraphics/Ellipse";
import { AddGraphics } from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class EditContentGraphisc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollEnabled: true,
      datastyleGraphics: {},
    };
  }

  async componentDidMount() {
    const datastyleGraphics = this.props.graphics;
    if (datastyleGraphics) {
      this.setState({
        datastyleGraphics: datastyleGraphics,
      });
    }
  }
  componentDidUpdate() {
    if (this.props.graphics !== this.state.datastyleGraphics)
      this.setState({ datastyleGraphics: this.props.graphics });
  }
  renderRectangle = () => {
    const data = RECTANGLE_DATA;
    return data.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.items}
          onPress={(item) => {
            // let tem = { ...item };
            this.props.addGraphics(item);
          }}
        >
          <Rectangle
            key={index}
            width={50}
            height={30}
            borderWidth={item.borderWidth}
            borderRadius={item.borderRadius}
            borderStyle={item.borderStyle}
            backgroundColor={item.backgroundColor}
            borderColor={item.borderColor}
          />
        </TouchableOpacity>
      );
    });
  };
  renderEllipe = () => {
    const data = Ellipse_DATA;
    return data.map((item, index) => {
      return (
        <TouchableOpacity style={styles.items}>
          <Ellipse key={index} backgroundColor={item.backgroundColor} />
        </TouchableOpacity>
      );
    });
  };
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
          Chỉnh nền
        </Text>
        <View style={styles.container}>
          <ScrollView
            ref={(scrollView) => (this.scrollView = scrollView)}
            scrollEnabled={this.state.scrollEnabled}
          >
            <View style={this.state.datastyleGraphics}>
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
                    Send all your content to ypur follwers throught one smart
                    link
                  </Text>
                </>
              )}
            </View>
            <View style={this.state.datastyleGraphics}>
              <View style={styles.customIcon}>
                {this.props.dataProfleCenter &&
                this.props.dataProfleCenter[0] ? (
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
            </View>
            <View style={this.state.datastyleGraphics}>
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
            </View>
          </ScrollView>
        </View>

        <View style={styles.container}>
          <ScrollableTabView
            style={{
              backgroundColor: Color.white,
            }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <ScrollView tabLabel="Nút">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Kiểu nút
                </Text>
                <View style={styles.group}>{this.renderRectangle()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu nút
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu viền nút
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Nền">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Gradient
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Hình ảnh
                </Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Chữ">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu tiêu đề
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu tiêu đề phụ
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu chữ nút
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Mạng xã hội">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu icon
                </Text>
                <View style={styles.group}>{this.renderEllipe()}</View>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
        <TouchableOpacity style={styles.contentButtonDeploy}>
          <Text style={{ color: Color.white, fontFamily: "BalooTamma2-Bold" }}>
            Lưu
          </Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "flex-start",
  },
  customBoder: {
    width: WIDTH - 10,
    // alignItems: "center",
    // paddingVertical: 10,
    // marginBottom: 10,
    // backgroundColor: Color.white,
    // borderRadius: 10,
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
const mapDispatchToProps = (dispatch) => {
  return {
    addGraphics: () => {
      dispatch(AddGraphics());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContentGraphisc);
