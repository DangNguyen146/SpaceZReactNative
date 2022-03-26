import React, { Component } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { URL } from "../../axios/config";
import AppStatusBar from "../../components/AppStatusBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import { getToken } from "../../utils/LocalStorage";
import Axios from "axios";

export default class SendMessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      dataList: [],
    };
  }
  async componentDidMount() {
    const token = await getToken();
    Axios({
      url: URL + "ordercreateCard",
      headers: {
        token: token,
      },
      method: "GET",
    })
      .then((result) => {
        console.log(result.data.data);
        this.setState({
          dataList: result.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  _onRefresh = async () => {
    const token = await getToken();
    Axios({
      url: URL + "ordercreateCard",
      headers: {
        token: token,
      },
      method: "GET",
    })
      .then((result) => {
        // console.log(result.data);
        this.setState({
          dataList: result.data.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderData = () => {
    return this.state.dataList.map((item, index) => {
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
            <Text
              style={{
                fontSize: 20,
                fontFamily: "BalooTamma2-Bold",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Đơn hàng đã đăt: {item.name}
            </Text>
            <Text>Tình trạng: Đang giao</Text>
          </View>
        </>
      );
    });
  };
  render() {
    const { navigation } = this.props;
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
          Các thẻ tự tạo đã order
        </Text>
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
          <View style={{ paddingBottom: 100 }}>{this.renderData()}</View>
        </ScrollView>
      </View>
    );
  }
}
