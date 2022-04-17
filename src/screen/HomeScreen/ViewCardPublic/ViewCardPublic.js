import Axios from "axios";
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { URL } from "../../../axios/config";
import AppStatusBar from "../../../components/AppStatusBar";
import LoadingButton from "../../../components/LoadingButton";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";
import String from "../../../theme/String";
import { getToken } from "../../../utils/LocalStorage";
import { AntDesign } from "@expo/vector-icons";
import CardView from "../../../components/CardView/CardView";
import { connect } from "react-redux";
import { TangBackgroundMS } from "../../../container/CreateCardScreenMS/Background/modules/action";
import { TangLogoMS } from "../../../container/CreateCardScreenMS/Logo/modules/action";
import { TangNameMS } from "../../../container/CreateCardScreenMS/Name/modules/action";
import { TangQrMS } from "../../../container/CreateCardScreenMS/QrCard/modules/action";
import { TangBackgroundMT } from "../../../container/CreateCardScreenMT/Background/modules/action";
import { TangLogoMT } from "../../../container/CreateCardScreenMT/Logo/modules/action";
import { TangNameMT } from "../../../container/CreateCardScreenMT/Name/modules/action";
import { TangQrMT } from "../../../container/CreateCardScreenMT/QrCard/modules/action";

const { width: WIDTH } = Dimensions.get("window");
class ViewCardPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      dataList: {},
    };
  }

  createCard = () => {
    const data = this.props.data;
    let dataMT = JSON.parse(data.dataMT);
    let dataMS = JSON.parse(data.dataMS);
    // console.log(dataMT.data1);
    this.props.addLogoMT(dataMT.data1);
    this.props.addBackgroundMT(dataMT.data1);
    this.props.addNameMT(dataMT.data3);
    this.props.addQrMT(dataMT.data4);

    this.props.addLogoMS(dataMS.data5);
    this.props.addBackgroundMS(dataMS.data6);
    this.props.addNameMS(dataMS.data7);
    this.props.addQrMS(dataMS.data8);

    this.props.navigation.navigate("EditCardMTScreen");
  };
  async componentDidMount() {
    this.setState({
      dataList: this.props.data,
    });
  }
  renderData = () => {
    const data = this.props.data;

    let dataMT = JSON.parse(data.dataMT);
    let dataMS = JSON.parse(data.dataMS);
    return (
      <>
        <View
          style={{
            backgroundColor: Color.white,
            marginHorizontal: 10,
            padding: 5,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <CardView key={1} data={dataMT} mt={1} />
            <View style={{ padding: 5 }}></View>
            <CardView key={2 * 4} data={dataMS} mt={0} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "BalooTamma2-Bold",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {data.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                alignContent: "center",
                borderTopWidth: 1,
                paddingVertical: 5,
                borderColor: Color.gray,
              }}
            >
              <View
                style={{
                  width: "100%",
                  borderEndWidth: 1,
                  borderColor: Color.gray,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: Color.pinkred,
                  }}
                >
                  <AntDesign name="linechart" size={20} color={Color.pinkred} />
                  Đặt mua
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
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
            fontSize: 25,
            fontFamily: "BalooTamma2-Bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {this.state.dataList.name}
        </Text>
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEnabled={this.state.scrollEnabled}
        >
          {this.state.dataList ? <View>{this.renderData()}</View> : <></>}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listCardEditReducer.itemCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBackgroundMS: (object) => {
      dispatch(TangBackgroundMS(object));
    },
    addLogoMS: (object) => {
      dispatch(TangLogoMS(object));
    },
    addNameMS: (object) => {
      dispatch(TangNameMS(object));
    },
    addQrMS: (object) => {
      dispatch(TangQrMS(object));
    },

    addBackgroundMT: (object) => {
      dispatch(TangBackgroundMT(object));
    },
    addLogoMT: (object) => {
      dispatch(TangLogoMT(object));
    },
    addNameMT: (object) => {
      dispatch(TangNameMT(object));
    },
    addQrMT: (object) => {
      dispatch(TangQrMT(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewCardPublic);
