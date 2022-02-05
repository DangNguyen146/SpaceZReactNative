import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import Color from "../../../theme/Color";
import DragSortableView from "../../../components/DragSortableView/DragSortableView";
import { DATA_PROFILE } from "../data/base/BaseConstant";
import UserInput from "../../../components/UserInput/UserInput";
import { MaterialIcons } from "@expo/vector-icons";
import String from "../../../theme/String";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICONS_DATA } from "../data/base/BaseIcons";
import Icons from "../../../components/Icons/Icons";
import { connect } from "react-redux";
import { AddProfileCenter, RemoveItemProfileCenter } from "./modules/action";

const { width } = Dimensions.get("window");

const parentWidth = width;
const childrenWidth = width;
const childrenHeight = 150;

class EditContentCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollEnabled: true,
      value: "",
      erro: "",
    };
  }
  swapIcon = (index) => {
    this.props.addProfileCenter(this.state.data);
    this.props.navigation.navigate("SelectIconProfileScreen", {
      index,
    });
  };
  async componentDidMount() {
    const dataProfleCenter = this.props.dataProfleCenter;
    if (dataProfleCenter) {
      this.setState({
        data: dataProfleCenter,
      });
    }
  }
  componentDidUpdate() {
    if (this.props.dataProfleCenter !== this.state.data)
      this.setState({ data: this.props.dataProfleCenter });
  }
  deleteItem = (index) => {
    this.props.removeItemProfileCenter(index);
  };
  addUp = () => {
    this.props.removeItemProfileCenter();
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
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
            textAlign: "center",
          }}
        >
          Biểu tượng mạng xã hội
        </Text>
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEnabled={this.state.scrollEnabled}
        >
          <View style={styles.container}>
            <DragSortableView
              dataSource={this.state.data}
              parentWidth={parentWidth}
              childrenWidth={childrenWidth}
              childrenHeight={childrenHeight}
              scaleStatus={"scaleY"}
              onDragStart={(startIndex, endIndex) => {
                this.setState({
                  scrollEnabled: false,
                });
              }}
              onDragEnd={(startIndex) => {
                this.setState({
                  scrollEnabled: true,
                });
              }}
              onDataChange={(data) => {
                if (data.length != this.state.data.length) {
                  this.setState({
                    data: data,
                  });
                }
              }}
              keyExtractor={(item, index) => item.txt} // FlatList
              onClickItem={(data, item, index) => {}}
              renderItem={(item, index) => {
                return this.renderItem(item, index);
              }}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.contentButtonOutline}
          onPress={() => {
            this.addUp();
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
        {this.state.erro ? (
          <Text
            style={{
              Color: Color.pinkred,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {this.state.erro}
          </Text>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={styles.contentButtonDeploy}
          onPress={() => {
            this.props.addProfileCenter(this.state.data);
            let test = true;
            this.state.data.map((item) => {
              if (item.title == "") {
                test = false;
                this.setState({
                  erro: "Chưa nhập đủ thông tin",
                });
              }
              return;
            });
            if (test) this.props.navigation.navigate("EditHomeProfileScreen");
          }}
        >
          <Text
            style={{
              color: Color.white,
              fontFamily: "BalooTamma2-Bold",
              textAlign: "center",
            }}
          >
            Lưu
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  renderItem(item, index) {
    return (
      <View style={styles.item}>
        <View style={styles.item_children}>
          <TouchableOpacity
            style={styles.itemChildren}
            onPress={() => {
              this.swapIcon(index);
            }}
          >
            <Icons
              name={item.name}
              icon={item.icon}
              size={item.size}
              color={item.color}
              style={styles.item_icon}
            />

            <Text style={styles.item_text}>Đổi icon</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView // tự scoll khi nhập input
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={styles.container}
            >
              <View style={{ marginTop: 20 }}>
                <MaterialIcons
                  name="web"
                  size={24}
                  color={Color.gray}
                  style={styles.inputIcon}
                />
                <UserInput
                  placeholder={String.nameProfile}
                  placeholderTextColor={Color.gray}
                  value={this.state.data[index].title}
                  color="black"
                  onChangeText={(value) => {
                    this.state.data[index].title = value;
                    this.setState({
                      data: this.state.data,
                    });
                  }}
                />
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
        <FontAwesome
          name="navicon"
          size={18}
          color={Color.black}
          style={styles.inputIcon2}
        />

        <MaterialIcons
          name="delete-outline"
          size={30}
          color={Color.pinkred}
          style={styles.inputIcon3}
          onPress={() => {
            this.deleteItem(index);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  item: {
    width: childrenWidth,
  },
  itemChildren: {
    flexDirection: "row",
  },
  item_children: {
    backgroundColor: Color.white,
    width: childrenWidth,
    height: childrenHeight - 4,
    paddingTop: 10,
    paddingLeft: 40,
  },
  item_icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  item_text: {
    color: Color.black,
    marginTop: 15,
    marginLeft: 30,
    fontFamily: "BalooTamma2-Bold",
  },
  inputIcon: {
    position: "absolute",
    top: 12,
    left: 10,
  },
  inputIcon2: {
    position: "absolute",
    top: "40%",
    left: 10,
  },
  contentButtonDeploy: {
    backgroundColor: Color.blue,
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
  },
  contentButtonOutline: {
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
  },
  inputIcon3: {
    position: "absolute",
    top: 15,
    right: 20,
    zIndex: 10,
  },
});
const mapStateToProps = (state) => {
  return {
    dataProfleCenter: state.contentReducer.dataProfleCenter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProfileCenter: (data) => {
      dispatch(AddProfileCenter(data));
    },
    removeItemProfileCenter: (index = -1) => {
      dispatch(RemoveItemProfileCenter(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContentCenter);
