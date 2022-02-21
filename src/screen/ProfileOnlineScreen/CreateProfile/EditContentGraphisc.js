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
import {
  Ellipse_DATA,
  GRAPHICS_NEN,
  RECTANGLE_DATA,
} from "../data/base/BaseGraphics";
import Rectangle from "../../../components/RenderGraphics/Rectangle";
import Ellipse from "../../../components/RenderGraphics/Ellipse";
import { AddGraphicsNen, AddGraphicsNenColor } from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class EditContentGraphisc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollEnabled: true,
      datastyleGraphics: GRAPHICS_NEN,
    };
  }

  async componentDidMount() {
    const datastyleGraphics = this.props.graphicsNen;

    if (datastyleGraphics) {
      this.setState({
        datastyleGraphics: datastyleGraphics,
      });
    }
  }
  componentDidUpdate() {
    const datastyleGraphics = this.props.graphicsNen;
    if (datastyleGraphics !== this.state.datastyleGraphics) {
      this.setState({ datastyleGraphics: datastyleGraphics });
    }
  }
  renderRectangle = () => {
    const data = RECTANGLE_DATA;
    return data.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            // let tem = { ...item };
            this.props.addGraphicsNen(item);
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
  renderEllipe = (name) => {
    const data = Ellipse_DATA;
    return data.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            this.props.addGraphicsNenColor(name, item);
          }}
        >
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
              color: this.state.datastyleGraphics[0].colorTitle,
              fontSize: 20,
              fontFamily: "BalooTamma2-Bold",
            }}
          >
            {dataProfleUp.namePublic}
          </Text>
          <Text
            style={{
              color: this.state.datastyleGraphics[0].colorDiscription,
              textAlign: "center",
            }}
          >
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
            color={this.state.datastyleGraphics[0].colorIcons}
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
              value={item.title}
              borderColor={this.state.datastyleGraphics[0].infoBorder}
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
        <View
          style={{
            height: "34%",
            backgroundColor: this.state.datastyleGraphics[0].backgroundNen,
            padding: 10,
          }}
        >
          <ScrollView
            ref={(scrollView) => (this.scrollView = scrollView)}
            scrollEnabled={this.state.scrollEnabled}
          >
            <View
              style={{
                borderWidth: this.state.datastyleGraphics[0].borderWidth,
                borderRadius: this.state.datastyleGraphics[0].borderRadius,
                borderStyle: this.state.datastyleGraphics[0].borderStyle,
                borderColor: this.state.datastyleGraphics[0].borderColor,
                backgroundColor:
                  this.state.datastyleGraphics[0].backgroundColor,
                alignItems: "center",
                paddingVertical: 10,
                marginBottom: 10,
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
                      color: this.state.datastyleGraphics[0].colorTitle,
                      fontSize: 20,
                      fontFamily: "BalooTamma2-Bold",
                    }}
                  >
                    SpaceZ
                  </Text>
                  <Text
                    style={{
                      color: this.state.datastyleGraphics[0].colorDiscription,
                      textAlign: "center",
                    }}
                  >
                    Send all your content to ypur follwers throught one smart
                    link
                  </Text>
                </>
              )}
            </View>
            <View
              style={{
                borderWidth: this.state.datastyleGraphics[0].borderWidth,
                borderRadius: this.state.datastyleGraphics[0].borderRadius,
                borderStyle: this.state.datastyleGraphics[0].borderStyle,
                borderColor: this.state.datastyleGraphics[0].borderColor,
                backgroundColor:
                  this.state.datastyleGraphics[0].backgroundColor,
                alignItems: "center",
                paddingVertical: 10,
                marginBottom: 10,
              }}
            >
              <View style={styles.customIcon}>
                {this.props.dataProfleCenter &&
                this.props.dataProfleCenter[0] ? (
                  renderDataProfileCenter()
                ) : (
                  <>
                    <FontAwesome5
                      name="facebook-square"
                      size={24}
                      color={this.state.datastyleGraphics[0].colorIcons}
                      style={styles.icon}
                    />
                    <FontAwesome5
                      name="instagram-square"
                      size={24}
                      color={this.state.datastyleGraphics[0].colorIcons}
                      style={styles.icon}
                    />
                    <FontAwesome5
                      name="twitter"
                      size={24}
                      color={this.state.datastyleGraphics[0].colorIcons}
                      style={styles.icon}
                    />
                    <FontAwesome5
                      name="facebook-messenger"
                      size={24}
                      color={this.state.datastyleGraphics[0].colorIcons}
                      style={styles.icon}
                    />
                  </>
                )}
              </View>
            </View>
            <View
              style={{
                borderWidth: this.state.datastyleGraphics[0].borderWidth,
                borderRadius: this.state.datastyleGraphics[0].borderRadius,
                borderStyle: this.state.datastyleGraphics[0].borderStyle,
                borderColor: this.state.datastyleGraphics[0].borderColor,
                backgroundColor:
                  this.state.datastyleGraphics[0].backgroundColor,
                alignItems: "center",
                paddingVertical: 10,
                marginBottom: 10,
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
                      borderColor={this.state.datastyleGraphics[0].infoBorder}
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
                      borderColor={this.state.datastyleGraphics[0].infoBorder}
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
                      borderColor={this.state.datastyleGraphics[0].infoBorder}
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
            <ScrollView tabLabel="Nền khung">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Kiểu nền khung
                </Text>
                <View style={styles.group}>{this.renderRectangle()}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu nền khung
                </Text>
                <View style={styles.group}>
                  {this.renderEllipe("NenKhung")}
                </View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu viền khung
                </Text>
                <View style={styles.group}>
                  {this.renderEllipe("VienKhung")}
                </View>
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
                <View style={styles.group}>{this.renderEllipe("Nen")}</View>
                {/* <Text
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
                </Text> */}
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
                <View style={styles.group}>{this.renderEllipe("title")}</View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu tiêu đề phụ
                </Text>
                <View style={styles.group}>
                  {this.renderEllipe("description")}
                </View>
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
                <View style={styles.group}>
                  {this.renderEllipe("iconSocial")}
                </View>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Khung thông tin">
              <View>
                <Text
                  style={{
                    fontFamily: "BalooTamma2-Bold",
                    marginStart: 20,
                  }}
                >
                  Màu khung
                </Text>
                <View style={styles.group}>
                  {this.renderEllipe("infoBorder")}
                </View>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
        <TouchableOpacity
          style={styles.contentButtonDeploy}
          onPress={() => {
            this.props.navigation.navigate("EditHomeProfileScreen");
          }}
          >
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
    graphicsNen: state.contentReducer.graphicsNen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addGraphicsNen: (data) => {
      dispatch(AddGraphicsNen(data));
    },
    addGraphicsNenColor: (name, data) => {
      dispatch(AddGraphicsNenColor(name, data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContentGraphisc);
