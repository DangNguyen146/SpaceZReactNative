import React, { Component } from "react";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Color from "../../../theme/Color";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import ScrollableTabBar from "@valdio/react-native-scrollable-tabview/lib/ScrollableTabBar";
import { Ionicons } from "@expo/vector-icons";
import LogoCreateMT from "../../../container/CreateCardScreenMT/Logo/LogoCreate";
import BackgroundMT from "../../../container/CreateCardScreenMT/Background/Background";
import NameCreateMT from "../../../container/CreateCardScreenMT/Name/NameCreate";
import QrcardMT from "../../../container/CreateCardScreenMT/QrCard/Qrcard";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { getToken } from "../../../utils/LocalStorage";
import Axios from "axios";
import { URL } from "../../../axios/config";

const { width: WIDTH } = Dimensions.get("window");

class HomeCreateMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.data1,
      data2: this.props.data2,
      data3: this.props.data3,
      data4: this.props.data4,
      scrollEnabled: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data1 !== this.state.data1) {
      this.setState({
        data1: nextProps.data1,
      });
    }
    if (nextProps.data2 !== this.state.data2) {
      this.setState({
        data2: nextProps.data2,
      });
    }
    if (nextProps.data3 !== this.state.data3) {
      this.setState({
        data3: nextProps.data3,
      });
    }
    if (nextProps.data4 !== this.state.data4) {
      this.setState({
        data4: nextProps.data4,
      });
    }
  }

  renderLogoImage = () => {
    if (this.state.data1.imagelogo) {
      let urlLogo = require("../../../assets/images/logo/Logo.png");
      if (this.state.data1.imagelogo == 1) {
        urlLogo = require("../../../assets/images/logo/Logo.png");
      }
      if (this.state.data1.imagelogo == 2) {
        urlLogo = require("../../../assets/images/logo/logo-image.png");
      }
      if (this.state.data1.imagelogo == 3) {
        urlLogo = require("../../../assets/images/logo/logo-text.png");
      }

      console.log("urlLogo" + urlLogo);
      return (
        <Image
          style={{
            width: this.state.data1.skew,
            height: this.state.data1.skew,
            resizeMode: "contain",
            top: (this.state.data1.logoY ? this.state.data1.logoY : 0) + "%",
            left: (this.state.data1.logoX ? this.state.data1.logoX : 0) + "%",
            position: "absolute",
          }}
          source={urlLogo}
        />
      );
    } else
      return (
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../../../assets/images/logo/Logo.png")}
        />
      );
  };
  renderTextCard = () => {
    if (
      this.state.data3 &&
      this.state.data3.name !== "" &&
      this.state.data3.textY &&
      this.state.data3.textX
    ) {
      return (
        <Text
          style={{
            color: this.state.data3.backgroupColorMau
              ? this.state.data3.backgroupColorMau
              : "#000",
            position: "absolute",
            fontWeight: "500",
            fontSize: this.state.data3.textSkew
              ? this.state.data3.textSkew
              : 20,
            top: this.state.data3.textY + "%",
            left: this.state.data3.textX + "%",
          }}
        >
          {this.state.data3.name}
        </Text>
      );
    }
  };
  renderQr = () => {
    if (
      this.state.data4 &&
      this.state.data4.link !== "" &&
      this.state.data4.qrX &&
      this.state.data4.qrY
    ) {
      return (
        <View
          style={{
            position: "absolute",
            left: this.state.data4.qrX + "%",
            top: this.state.data4.qrY + "%",
            padding: 5,
            backgroundColor: "#fff",
          }}
        >
          <QRCode
            size={this.state.data4.qrSkew}
            value={this.state.data4.link}
          />
        </View>
      );
    }
  };
  renderCard = () => {
    if (this.state.data2 && this.state.data2.backgroundCard == null) {
      return (
        <View
          style={{
            width: "100%",
            height: 250,
            overflow: "scroll",
            position: "relative",
            backgroundColor: this.state.data2.backgroupColorMau
              ? this.state.data2.backgroupColorMau
              : "#567890",
          }}
        >
          {this.renderLogoImage()}
          {this.renderTextCard()}
          {this.renderQr()}
        </View>
      );
    } else if (this.state.data2 && this.state.data2.backgroundCard !== null) {
      return (
        <ImageBackground
          style={{
            width: "100%",
            height: 250,
            overflow: "scroll",
            position: "relative",
          }}
          source={{ uri: this.state.data2.backgroundCard }}
        >
          {this.renderLogoImage()}
          {this.renderTextCard()}
          {this.renderQr()}
        </ImageBackground>
      );
    }
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
          Tạo card mặt trước
        </Text>
        {this.renderCard()}
        <View style={styles.container}>
          <ScrollableTabView
            style={{
              backgroundColor: Color.white,
            }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <ScrollView tabLabel="Logo">
              <LogoCreateMT key={1} />
            </ScrollView>
            <ScrollView tabLabel="Nền">
              <BackgroundMT key={2} />
            </ScrollView>
            <ScrollView tabLabel="Tên">
              <NameCreateMT key={3} />
            </ScrollView>
            <ScrollView tabLabel="Qr">
              <QrcardMT key={4} />
            </ScrollView>
          </ScrollableTabView>
        </View>

        <View style={styles.down}>
          <TouchableOpacity
            style={styles.contentDown}
            onPress={() => {
              MediaLibrary.saveToLibraryAsync(this.state.data2.backgroundCard);
            }}
          >
            <FontAwesome5
              name="images"
              size={24}
              color="#FF007A"
              style={styles.iconDown}
            />
            <Text>Tải ảnh xuống</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentDown}
            onPress={async () => {
              if (this.props.data1 !== null && this.props.data5 !== null) {
                let dataMT = {
                  data1: this.props.data1,
                  data2: this.props.data2,
                  data3: this.props.data3,
                  data4: this.props.data4,
                };
                let dataMS = {
                  data5: this.props.data5,
                  data6: this.props.data6,
                  data7: this.props.data7,
                  data8: this.props.data8,
                };
                let data = {
                  status: this.props.data.status,
                  name: this.props.data.name,
                  dataMT: JSON.stringify(dataMT),
                  dataMS: JSON.stringify(dataMS),
                };
                const token = await getToken();
                Axios({
                  url: URL + "createcard",
                  headers: {
                    token: token,
                  },
                  data: data,
                  method: "POST",
                })
                  .then((result) => {
                    // console.log(result.data);
                    this.props.navigation.navigate("HomeScreen");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            <Ionicons
              name="flash-sharp"
              size={24}
              color="#FFE600"
              style={styles.iconDown}
            />
            <Text>Deploy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentDown}
            onPress={() => {
              this.props.navigation.navigate("CreateCardMSScreen");
            }}
          >
            <Ionicons
              name="flash-sharp"
              size={24}
              color="#FFE600"
              style={styles.iconDown}
            />
            <Text>Chỉnh sửa mặt sau</Text>
          </TouchableOpacity>
        </View>
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
  down: {
    flexDirection: "row",
    flexWrap: "wrap",
    // position: "absolute",
    alignItems: "center",
    bottom: 0,
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
const mapStateToProps = (state) => {
  return {
    data: state.listNameCardCreateMSReducer.itemNameCard,

    data1: state.listLogoCreateMTReducer.logoMT,
    data2: state.listBackgroundCreateMTReducer.backgroundMT,
    data3: state.listNameCreateMTReducer.nameMT,
    data4: state.listQrCreateMTReducer.qrMT,

    data5: state.listLogoCreateMSReducer.logoMS,
    data6: state.listBackgroundCreateMSReducer.backgroundMS,
    data7: state.listNameCreateMSReducer.nameMS,
    data8: state.listQrCreateMSReducer.qrMS,
  };
};
export default connect(mapStateToProps)(HomeCreateMT);
