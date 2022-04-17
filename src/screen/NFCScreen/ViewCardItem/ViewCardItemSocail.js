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
import { connect } from "react-redux";
import AppStatusBar from "../../../components/AppStatusBar";
import CardView from "../../../components/CardView/CardView";
import ToolBar from "../../../components/ToolBar/ToolBar";
import { TangBackgroundMS } from "../../../container/CreateCardScreenMS/Background/modules/action";
import { TangLogoMS } from "../../../container/CreateCardScreenMS/Logo/modules/action";
import { TangNameMS } from "../../../container/CreateCardScreenMS/Name/modules/action";
import { TangQrMS } from "../../../container/CreateCardScreenMS/QrCard/modules/action";
import { TangBackgroundMT } from "../../../container/CreateCardScreenMT/Background/modules/action";
import { TangLogoMT } from "../../../container/CreateCardScreenMT/Logo/modules/action";
import { TangNameMT } from "../../../container/CreateCardScreenMT/Name/modules/action";
import { TangQrMT } from "../../../container/CreateCardScreenMT/QrCard/modules/action";
import Color from "../../../theme/Color";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Axios from "axios";
import { AddCommentSocial, AddLikeSocial } from "../modules/action";
import { getToken } from "../../../utils/LocalStorage";
import { URL } from "../../../axios/config";
import UserInput from "../../../components/UserInput/UserInput";

const { width: WIDTH } = Dimensions.get("window");

class ViewCardItemSocail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollEnabled: true,
      itemCard: {},
      id: "",
      listLike: [],
      listComment: [],
      isLike: false,
      content: "",
    };
  }
  async componentDidMount() {
    const token = await getToken();
    Axios({
      url: URL + "createcard/mylist/" + this.state.id + "/checklike",
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((result) => {
        this.setState({
          isLike: result.data.isLike,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      itemCard: this.props.itemCard,
      id: this.props.itemCard.id,
      listLike: this.props.listLike,
      listComment: this.props.listComment,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.listLike !== this.state.listLike) {
      this.setState({
        listLike: nextProps.listLike,
      });
    }
    if (nextProps.listComment !== this.state.listComment) {
      this.setState({
        listComment: nextProps.listComment,
      });
    }
  }

  renderData = () => {
    const data = this.props.itemCard;

    let dataMT = JSON.parse(data.dataMT);
    let dataMS = JSON.parse(data.dataMS);
    return (
      <>
        <CardView key={data.id} data={dataMT} mt={1} />
        <View style={{ padding: 5 }}></View>
        <CardView key={data.id + 100} data={dataMS} mt={0} />
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
      </>
    );
  };
  callLike = async () => {
    const token = await getToken();
    Axios({
      url: URL + "createcard/mylist/" + this.state.id + "/like",
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((result) => {
        this.props.addLikeSocial(result.data.datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderLike = () => {
    const data = this.state.listLike;

    if (data && data[0] && this.state.isLike)
      return (
        <TouchableOpacity
          style={{
            width: "35%",
            borderEndWidth: 1,
            borderColor: Color.gray,
          }}
          onPress={this.callLike}
        >
          <Text
            style={{
              textAlign: "center",
              color: Color.pinkred,
            }}
          >
            <AntDesign name="like1" size={24} color={Color.pinkred} /> {"  "}
            {data.length}
            {"  "}
            Thích
          </Text>
        </TouchableOpacity>
      );
    else if (data && data[0]) {
      return (
        <TouchableOpacity
          style={{
            width: "35%",
            borderEndWidth: 1,
            borderColor: Color.gray,
          }}
          onPress={this.callLike}
        >
          <Text
            style={{
              textAlign: "center",
              color: Color.pinkred,
            }}
          >
            <AntDesign name="like1" size={24} color={Color.pinkred} /> {"  "}
            {data.length}
            {"  "}
            Thích
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            width: "35%",
            borderEndWidth: 1,
            borderColor: Color.gray,
          }}
          onPress={this.callLike}
        >
          <Text
            style={{
              textAlign: "center",
              color: Color.pinkred,
            }}
          >
            <AntDesign name="like2" size={24} color={Color.pinkred} /> {"  "}0
            Thích
          </Text>
        </TouchableOpacity>
      );
    }
  };
  sendContent = async () => {
    const token = await getToken();
    Axios({
      url: URL + "createcard/mylist/" + this.state.id + "/comment",
      method: "POST",
      headers: {
        token: token,
      },
      data: { content: this.state.content },
    })
      .then((result) => {
        this.props.addCommentSocial(result.data.datas);
        this.setState({
          content: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderDataComment = () => {
    const data = this.state.listComment;
    if (data && data[0])
      return data.map((item) => {
        return (
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View style={{ width: "30%" }}>
              <View
                style={{
                  width: "70%",
                  height: 50,
                  backgroundColor: Color.gray,
                }}
              ></View>
            </View>
            <View style={{ width: "70%" }}>
              <Text
                style={{
                  color: Color.black,
                  fontFamily: "BalooTamma2-ExtraBold",
                }}
              >
                {item.nameUserComment}
              </Text>
              <Text
                style={{
                  color: Color.black,
                  fontFamily: "BalooTamma2-Regular",
                }}
              >
                {item.content}
              </Text>
            </View>
          </View>
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
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEnabled={this.state.scrollEnabled}
        >
          {this.state.itemCard ? (
            <View style={{ paddingBottom: 200 }}>
              <View
                style={{
                  backgroundColor: Color.white,
                  marginHorizontal: 10,
                  padding: 5,
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
                    {this.renderData()}
                    {this.renderLike()}
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
                    <TouchableOpacity
                      style={{
                        width: "30%",
                        borderStartWidth: 1,
                        borderColor: Color.gray,
                      }}
                      onPress={() => {
                        this.props.navigation.navigate("OrderViewSocial");
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
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>{this.renderDataComment()}</View>
              <View>
                <View style={styles.textInputContainer}>
                  <UserInput
                    color={Color.black}
                    placeholderTextColor={Color.gray}
                    value={this.state.content}
                    onChangeText={(content) => {
                      this.setState({
                        content,
                      });
                    }}
                  />
                  <TouchableOpacity
                    style={styles.touchPassword}
                    onPress={() => {
                      this.sendContent();
                    }}
                  >
                    <Text
                      style={{
                        color: Color.white,
                        fontFamily: "BalooTamma2-Medium",
                      }}
                    >
                      Gởi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  up: {
    flex: 4,
    top: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  center: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  down: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    marginTop: 52,
    fontSize: 26,
    zIndex: 99,
    textAlign: "center",
    color: Color.white,
    fontFamily: "BalooTamma2-ExtraBold",
  },
  textInput: {
    width: WIDTH - 55,
    height: 45,
    borderColor: Color.blue,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    color: Color.white,
    padding: 10,
    paddingLeft: 45,
    marginHorizontal: 25,
    zIndex: 3,
  },
  loginButton: {
    marginTop: 21,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blue,
  },
  textLogin: {
    fontSize: 16,
    color: Color.white,
    marginBottom: 0,
    fontFamily: "BalooTamma2-ExtraBold",
  },
  linkText: {
    marginTop: 7,
    alignItems: "flex-end",
    width: WIDTH - 55,
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: Color.white,
  },
  textOr: {
    flex: 1,
    textAlign: "center",
    color: Color.white,
    fontFamily: "BalooTamma2-Medium",
  },
  divider: {
    flexDirection: "row",
    width: 320,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  logoLeft: {
    marginEnd: 20,
    alignItems: "flex-end",
  },
  logoRight: {
    marginStart: 20,
    alignItems: "flex-start",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  touchPassword: {
    position: "absolute",
    top: 0,
    right: 10,
    zIndex: 5,
    backgroundColor: Color.blue,
    padding: 10,
    borderRadius: 10,
  },
  textInputContainer: {
    marginTop: 21,
    paddingBottom: 100,
  },
});
const mapStateToProps = (state) => {
  return {
    itemCard: state.listCardSocialReducer.itemCard,
    listLike: state.listCardSocialReducer.listLike,
    listComment: state.listCardSocialReducer.listComment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLikeSocial: (object) => {
      dispatch(AddLikeSocial(object));
    },
    addCommentSocial: (object) => {
      dispatch(AddCommentSocial(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewCardItemSocail);
