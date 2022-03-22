import React, { Component } from "react";
import { URL } from "../../axios/config";
import AppStatusBar from "../../components/AppStatusBar";
import LoadingButton from "../../components/LoadingButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import String from "../../theme/String";
import { getToken } from "../../utils/LocalStorage";
import { AntDesign } from "@expo/vector-icons";
import CardView from "../../components/CardView/CardView";
import Axios from "axios";
import { Fontisto } from "@expo/vector-icons";
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

const { width: WIDTH } = Dimensions.get("window");
export default class NFCScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      dataList: [],
    };
  }

  async componentDidMount() {
    Axios({
      url: URL + "createcard/alllist",
      method: "GET",
    })
      .then((result) => {
        // console.log(result.data);
        this.setState({
          dataList: result.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderData = () => {
    return this.state.dataList.map((item, index) => {
      let dataMT = JSON.parse(item.dataMT);
      let dataMS = JSON.parse(item.dataMS);
      // console.log(dataMT);
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
              <CardView key={index} data={dataMT} mt={1} />
              <View style={{ padding: 5 }}></View>
              <CardView key={index * 4} data={dataMS} mt={0} />
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
                  {item.name}
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
                    width: "35%",
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
                    <AntDesign name="like2" size={24} color={Color.pinkred} />
                    Thích
                  </Text>
                </View>
                <View
                  style={{
                    width: "35%",
                    borderStartWidth: 1,
                    borderColor: Color.gray,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: Color.purple,
                    }}
                  >
                    <AntDesign name="edit" size={24} color={Color.purple} />
                    {"    "}Bình luận
                  </Text>
                </View>
                <View
                  style={{
                    width: "30%",
                    borderStartWidth: 1,
                    borderColor: Color.gray,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: Color.purple,
                    }}
                  >
                    <Fontisto
                      name="shopping-basket-add"
                      size={24}
                      color="green"
                    />
                    {"    "}Đặt mua
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    });
  };
  _onRefresh = async () => {
    this.setState({ refreshing: true });
    const token = await getToken();
    Axios({
      url: URL + "createcard/alllist",
      headers: {
        token: token,
      },
      method: "GET",
    })
      .then((result) => {
        this.setState({
          dataList: result.data.data,
          refreshing: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
        <ToolBar
          name="MaterialCommunityIcons"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "BalooTamma2-Bold",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Mọi người thiết kế
          </Text>
        </View>
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEnabled={this.state.scrollEnabled}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={{ flex: 1, marginBottom: 250 }}>
            {this.renderData()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginButton: {
    marginTop: 21,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blue,
  },
});
