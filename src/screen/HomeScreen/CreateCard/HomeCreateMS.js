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
import LogoCreateMS from "../../../container/CreateCardScreenMS/Logo/LogoCreate";
import BackgroundMS from "../../../container/CreateCardScreenMS/Background/Background";
import NameCreateMS from "../../../container/CreateCardScreenMS/Name/NameCreate";
import QrcardMS from "../../../container/CreateCardScreenMS/QrCard/Qrcard";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { MediaLibrary } from "expo-media-library";

const { width: WIDTH } = Dimensions.get("window");

class HomeCreateMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      scrollEnabled: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data5 !== this.state.data5) {
      this.setState({
        data5: nextProps.data5,
      });
    }
    if (nextProps.data6 !== this.state.data6) {
      this.setState({
        data6: nextProps.data6,
      });
    }
    if (nextProps.data7 !== this.state.data7) {
      this.setState({
        data7: nextProps.data7,
      });
    }
    if (nextProps.data8 !== this.state.data8) {
      this.setState({
        data8: nextProps.data8,
      });
    }
  }
  componentDidMount() {
    this.setState({
      data5: this.props.data5,
      data6: this.props.data6,
      data7: this.props.data7,
      data8: this.props.data8,
    });
  }

  renderLogoImage = () => {
    if (this.state.data5.imagelogo) {
      let urlLogo = require("../../../assets/images/logo/Logo.png");
      if (this.state.data5.imagelogo == 1)
        urlLogo = require("../../../assets/images/logo/Logo.png");
      if (this.state.data5.imagelogo == 2)
        urlLogo = require("../../../assets/images/logo/logo-image.png");
      if (this.state.data5.imagelogo == 3)
        urlLogo = require("../../../assets/images/logo/logo-text.png");
      return (
        <Image
          style={{
            width: this.state.data5.skew,
            height: this.state.data5.skew,
            resizeMode: "contain",
            top: this.state.data5.logoY + "%",
            left: this.state.data5.logoX + "%",
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
      this.state.data7 &&
      this.state.data7.name !== "" &&
      this.state.data7.textY &&
      this.state.data7.textX
    ) {
      return (
        <Text
          style={{
            color: this.state.data7.backgroupColorMau
              ? this.state.data7.backgroupColorMau
              : "#000",
            position: "absolute",
            fontWeight: "500",
            fontSize: this.state.data7.textSkew
              ? this.state.data7.textSkew
              : 20,
            top: this.state.data7.textY + "%",
            left: this.state.data7.textX + "%",
          }}
        >
          {this.state.data7.name}
        </Text>
      );
    }
  };
  renderQr = () => {
    if (
      this.state.data8 &&
      this.state.data8.link !== "" &&
      this.state.data8.qrX &&
      this.state.data8.qrY
    ) {
      return (
        <View
          style={{
            position: "absolute",
            left: (this.state.data8.qrX ? this.state.data8.qrX : 0) + "%",
            top: (this.state.data8.qrY ? this.state.data8.qrY : 0) + "%",
          }}
        >
          <QRCode
            size={this.state.data8.qrSkew}
            value={this.state.data8.link}
          />
        </View>
      );
    }
  };
  renderCard = () => {
    if (this.state.data6 && this.state.data6.backgroundCard == null) {
      return (
        <View
          style={{
            width: "100%",
            height: 250,
            overflow: "scroll",
            position: "relative",
            backgroundColor: this.state.data6.backgroupColorMau
              ? this.state.data6.backgroupColorMau
              : "#567890",
          }}
        >
          {this.renderLogoImage()}
          {this.renderTextCard()}
          {this.renderQr()}
        </View>
      );
    } else if (this.state.data6 && this.state.data6.backgroundCard !== null) {
      return (
        <ImageBackground
          style={{
            width: "100%",
            height: 250,
            overflow: "scroll",
            position: "relative",
          }}
          source={{ uri: this.state.data6.backgroundCard }}
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
          Tạo card mặt sau
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
              <LogoCreateMS key={1} />
            </ScrollView>
            <ScrollView tabLabel="Nền">
              <BackgroundMS key={2} />
            </ScrollView>
            <ScrollView tabLabel="Tên">
              <NameCreateMS key={3} />
            </ScrollView>
            <ScrollView tabLabel="Qr">
              <QrcardMS key={4} />
            </ScrollView>
          </ScrollableTabView>
        </View>
        <View style={styles.down}>
          <TouchableOpacity style={styles.contentDown} onPress={() => {}}>
            <FontAwesome5
              name="images"
              size={24}
              color="#FF007A"
              style={styles.iconDown}
            />
            <Text>Tải ảnh xuống</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentDown}>
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
              this.props.navigation.navigate("CreateCardMTScreen");
            }}
          >
            <Ionicons
              name="flash-sharp"
              size={24}
              color="#FFE600"
              style={styles.iconDown}
            />
            <Text>Chỉnh sửa mặt trước</Text>
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
    data5: state.listLogoCreateMSReducer.logoMS,
    data6: state.listBackgroundCreateMSReducer.backgroundMS,
    data7: state.listNameCreateMSReducer.nameMS,
    data8: state.listQrCreateMSReducer.qrMS,
  };
};
export default connect(mapStateToProps)(HomeCreateMS);
