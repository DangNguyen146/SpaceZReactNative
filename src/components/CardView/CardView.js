import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      scrollEnabled: true,
    };
  }
  componentDidMount() {
    const data = this.props.data;
    const mt = this.props.mt;
    if (mt == 1)
      this.setState({
        data1: data.data1,
        data2: data.data2,
        data3: data.data3,
        data4: data.data4,
      });
    if (mt == 0)
      this.setState({
        data1: data.data5,
        data2: data.data6,
        data3: data.data7,
        data4: data.data8,
      });
  }
  renderLogoImage = () => {
    if (this.state.data1.imagelogo) {
      let urlLogo = require("../../assets/images/logo/Logo.png");
      if (this.state.data1.imagelogo == 1)
        urlLogo = require("../../assets/images/logo/Logo.png");
      if (this.state.data1.imagelogo == 2)
        urlLogo = require("../../assets/images/logo/logo-image.png");
      if (this.state.data1.imagelogo == 3)
        urlLogo = require("../../assets/images/logo/logo-text.png");
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
          source={require("../../assets/images/logo/Logo.png")}
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
            top: (this.state.data3.textY ? this.state.data3.textY : 0) + "%",
            left: (this.state.data3.textX ? this.state.data3.textX : 0) + "%",
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
            left: (this.state.data4.qrX ? this.state.data4.qrX : 0) + "%",
            top: (this.state.data4.qrY ? this.state.data4.qrY : 0) + "%",
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
      <View
        style={{
          width: "100%",
        }}
      >
        {this.renderCard()}
      </View>
    );
  }
}

export default CardView;
