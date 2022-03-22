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
import { URL } from "../../axios/config";
import AppStatusBar from "../../components/AppStatusBar";
import LoadingButton from "../../components/LoadingButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import String from "../../theme/String";
import { getToken } from "../../utils/LocalStorage";
import { AntDesign } from "@expo/vector-icons";
import CardView from "../../components/CardView/CardView";
import { connect } from "react-redux";
import { TanCardEdit } from "./EditCard/modules/action";

const { width: WIDTH } = Dimensions.get("window");
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      dataList: [],
    };
  }
  createCard = () => {
    this.props.navigation.navigate("CreateCard");
  };
  async componentDidMount() {
    const token = await getToken();
    Axios({
      url: URL + "createcard/mylist",
      headers: {
        token: token,
      },
      method: "GET",
    })
      .then((result) => {
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
            <TouchableOpacity
              style={{ flexDirection: "row", flexWrap: "wrap" }}
              onPress={() => {
                this.props.tanCardEdit(item);
                this.props.navigation.navigate("ViewCard", {
                  name: item.id,
                });
              }}
            >
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
                    width: "50%",
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
                    <AntDesign
                      name="linechart"
                      size={20}
                      color={Color.pinkred}
                    />
                    Đặt mua
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
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
                    {"    "}Chỉnh sửa
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </>
      );
    });
  };
  _onRefresh = async () => {
    this.setState({ refreshing: true });
    const token = await getToken();
    Axios({
      url: URL + "createcard/mylist",
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
          Các bản thiết kế
        </Text>
        {this.state.dataList && this.state.dataList[0] ? (
          <>
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
                <TouchableOpacity
                  style={{
                    borderColor: Color.blue,
                    borderWidth: 2,
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
                    justifyContent: "center",
                    marginTop: 20,
                    marginHorizontal: 20,
                    backgroundColor: Color.white,
                  }}
                  onPress={() => {
                    this.createCard();
                  }}
                >
                  <Text
                    style={{
                      color: Color.blue,
                      fontFamily: "BalooTamma2-Bold",
                      textAlign: "center",
                    }}
                  >
                    + Thêm
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        ) : (
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
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Image
                source={require("../../assets/images/profile/createcard.png")}
              />
              <View style={styles.loginButton}>
                <LoadingButton
                  title={String.createCard}
                  loading={this.state.loading}
                  onPress={() => {
                    this.createCard();
                  }}
                />
              </View>
            </View>
          </ScrollView>
        )}
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
const mapDispatchToProps = (dispatch) => {
  return {
    tanCardEdit: (object) => {
      dispatch(TanCardEdit(object));
    },
  };
};
export default connect(null, mapDispatchToProps)(HomeScreen);
