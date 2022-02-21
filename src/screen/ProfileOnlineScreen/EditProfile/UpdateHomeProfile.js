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
import Axios from "axios";
import { URL } from "../../../axios/config";
import { getToken } from "../../../utils/LocalStorage";
import {
  RemoveContentEdit,
  RemoveGraphicsNenEdit,
  RemoveProfileCenterEdit,
  RemoveProfileDownEdit,
  RemoveProfileUpEdit,
} from "./modules/action";

const { width: WIDTH } = Dimensions.get("window");

class UpdateHomeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dataProfleUp = this.props.dataProfleUp;
    const datastyleGraphics = this.props.graphicsNen;
    const renderDataProfileUp = () => {
      return (
        <>
          <Image
            source={{ uri: dataProfleUp.avatarPublic }}
            style={{ width: 200, height: 200, borderRadius: 200 }}
          />
          <Text
            style={{
              color: datastyleGraphics[0].colorTitle,
              fontSize: 20,
              fontFamily: "BalooTamma2-Bold",
            }}
          >
            {dataProfleUp.namePublic}
          </Text>
          <Text
            style={{
              color: datastyleGraphics[0].colorDiscription,
              textAlign: "center",
            }}
          >
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
            color={datastyleGraphics[0].colorIcons}
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
              borderColor={datastyleGraphics[0].infoBorder}
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
          Tùy chỉnh
        </Text>
        <TouchableOpacity
          style={{
            width: WIDTH - 10,
            borderWidth: datastyleGraphics[0].borderWidth,
            borderRadius: datastyleGraphics[0].borderRadius,
            borderStyle: datastyleGraphics[0].borderStyle,
            borderColor: datastyleGraphics[0].borderColor,
            backgroundColor: datastyleGraphics[0].backgroundColor,
            alignItems: "center",
            paddingVertical: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            this.props.navigation.navigate("UpdateContentUpScreen");
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
                  color: datastyleGraphics[0].colorTitle,
                  fontSize: 20,
                  fontFamily: "BalooTamma2-Bold",
                }}
              >
                SpaceZ
              </Text>
              <Text
                style={{
                  color: datastyleGraphics[0].colorDiscription,
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
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: WIDTH - 10,
            borderWidth: datastyleGraphics[0].borderWidth,
            borderRadius: datastyleGraphics[0].borderRadius,
            borderStyle: datastyleGraphics[0].borderStyle,
            borderColor: datastyleGraphics[0].borderColor,
            backgroundColor: datastyleGraphics[0].backgroundColor,
            alignItems: "center",
            paddingVertical: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            this.props.navigation.navigate("UpdateContentCenterScreen");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {this.props.dataProfleCenter && this.props.dataProfleCenter[0] ? (
              renderDataProfileCenter()
            ) : (
              <>
                <FontAwesome5
                  name="facebook-square"
                  size={24}
                  color={datastyleGraphics[0].colorIcons}
                  style={styles.icon}
                />
                <FontAwesome5
                  name="instagram-square"
                  size={24}
                  color={datastyleGraphics[0].colorIcons}
                  style={styles.icon}
                />
                <FontAwesome5
                  name="twitter"
                  size={24}
                  color={datastyleGraphics[0].colorIcons}
                  style={styles.icon}
                />
                <FontAwesome5
                  name="facebook-messenger"
                  size={24}
                  color={datastyleGraphics[0].colorIcons}
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
          style={{
            width: WIDTH - 10,
            borderWidth: datastyleGraphics[0].borderWidth,
            borderRadius: datastyleGraphics[0].borderRadius,
            borderStyle: datastyleGraphics[0].borderStyle,
            borderColor: datastyleGraphics[0].borderColor,
            backgroundColor: datastyleGraphics[0].backgroundColor,
            alignItems: "center",
            paddingVertical: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            this.props.navigation.navigate("UpdateContentDownScreen");
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
                  borderColor={datastyleGraphics[0].infoBorder}
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
                  borderColor={datastyleGraphics[0].infoBorder}
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
                  borderColor={datastyleGraphics[0].infoBorder}
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
        <TouchableOpacity
          style={styles.contentButtonDeploy}
          onPress={async () => {
            let data = {
              name: this.props.dataProfile.name,
              slug: this.props.dataProfile.slug,
              status: this.props.dataProfile.status,
              idTemplate: this.props.dataProfile.idTemplate,
              avatarPublic: this.props.dataProfleUp.avatarPublic,
              description: this.props.dataProfleUp.description,
              namePublic: this.props.dataProfleUp.namePublic,
              up: JSON.stringify(this.props.dataProfleUp),
              center: JSON.stringify(this.props.dataProfleCenter),
              down: JSON.stringify(this.props.dataProfileDown),
              graphics: JSON.stringify(this.props.graphicsNen),
            };
            const token = await getToken();
            Axios({
              url: URL + "profile/" + this.props.id,
              headers: {
                token: token,
              },
              data: data,
              method: "PUT",
            })
              .then((result) => {
                // this.props.removeContent();
                this.props.navigation.navigate("Profile");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <Text style={{ color: Color.white, fontFamily: "BalooTamma2-Bold" }}>
            Deploy
          </Text>
        </TouchableOpacity>
        <View style={styles.down}>
          <TouchableOpacity
            style={styles.contentDown}
            onPress={() => {
              this.props.navigation.navigate("UpdateContentGraphiscScreen");
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
          <TouchableOpacity
            style={styles.contentDown}
            onPress={() => {
              this.props.navigation.navigate("UpdateSlugScreen");
            }}
          >
            <Ionicons
              name="flash-sharp"
              size={24}
              color="#FFE600"
              style={styles.iconDown}
            />
            <Text>Chỉnh slug</Text>
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
    id: state.contentReducerEdit.id,
    dataProfile: state.contentReducerEdit.dataProfile,
    dataProfleUp: state.contentReducerEdit.dataProfleUp,
    dataProfleCenter: state.contentReducerEdit.dataProfleCenter,
    dataProfileDown: state.contentReducerEdit.dataProfileDown,
    graphicsNen: state.contentReducerEdit.graphicsNen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeContent: () => {
      dispatch(RemoveContentEdit());
      dispatch(RemoveProfileUpEdit());
      dispatch(RemoveProfileCenterEdit());
      dispatch(RemoveProfileDownEdit());
      dispatch(RemoveGraphicsNenEdit());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateHomeProfile);
