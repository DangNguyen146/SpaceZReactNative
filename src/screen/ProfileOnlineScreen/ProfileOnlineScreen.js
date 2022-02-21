import Axios from "axios";
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
import { URL } from "../../axios/config";
import AppStatusBar from "../../components/AppStatusBar";
import LoadingButton from "../../components/LoadingButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import String from "../../theme/String";
import { getToken } from "../../utils/LocalStorage";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  AddContentEdit,
  AddGraphicsNenEdit,
  AddIdEdit,
  AddProfileCenterEdit,
  AddProfileDownEdit,
  AddProfileUpEdit,
  RemoveItemProfileCenterEdit,
} from "./EditProfile/modules/action";

const { width: WIDTH } = Dimensions.get("window");

class ProfileOnlineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      dataList: [],
      refreshing: false,
    };
  }
  createProfile = () => {
    this.props.navigation.navigate("CreateProfile");
  };
  async componentDidMount() {
    const token = await getToken();
    Axios({
      url: URL + "profile",
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
    this.focusListener = this.props.navigation.addListener("focus", () => {
      Axios({
        url: URL + "profile",
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
    });
  }
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
            <TouchableOpacity
              style={{ flexDirection: "row", flexWrap: "wrap" }}
              onPress={() => {
                let content = {
                  name: item.name,
                  slug: item.slug,
                  status: item.status,
                };
                this.props.addContent(content);
                let up = JSON.parse(item.up);
                this.props.addContentUp(up);
                let center = JSON.parse(item.center);
                this.props.addProfileCenter(center);
                let down = JSON.parse(item.down);
                this.props.addProfileDown(down);
                let graphicsNen = JSON.parse(item.graphics);
                this.props.addGraphicsNen(graphicsNen);
                this.props.addId(item.id);
                this.props.navigation.navigate("PreviewProfile");
              }}
            >
              <View style={{ width: 100, height: 100 }}></View>
              <View>
                <Text style={{ fontSize: 20, fontFamily: "BalooTamma2-Bold" }}>
                  {item.name}
                </Text>
                <Text>Link: </Text>
              </View>
            </TouchableOpacity>

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
                  <AntDesign name="linechart" size={20} color={Color.pinkred} />
                  {"    "}Phân tích
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
          </View>
        </>
      );
    });
  };
  _onRefresh = async () => {
    this.setState({ refreshing: true });
    const token = await getToken();
    Axios({
      url: URL + "profile",
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
          // title="Create profile online"
          // icon="face-profile"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        {this.state.dataList && this.state.dataList[0] ? (
          <>
            <Text
              style={{
                color: Color.black,
                fontSize: 20,
                fontFamily: "BalooTamma2-ExtraBold",
                textAlign: "center",
              }}
            >
              Quản lý profile
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
                    this.createProfile();
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
                source={require("../../assets/images/profile/linkProfile.png")}
              />
              <View style={styles.loginButton}>
                <LoadingButton
                  title={String.createProfile}
                  loading={this.state.loading}
                  onPress={() => {
                    this.createProfile();
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
    addId: (id) => {
      dispatch(AddIdEdit(id));
    },
    addContent: (data) => {
      dispatch(AddContentEdit(data));
    },
    addContentUp: (data) => {
      dispatch(AddProfileUpEdit(data));
    },
    addProfileCenter: (data) => {
      dispatch(AddProfileCenterEdit(data));
    },
    addProfileDown: (data) => {
      dispatch(AddProfileDownEdit(data));
    },
    addGraphicsNen: (data) => {
      dispatch(AddGraphicsNenEdit(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProfileOnlineScreen);
