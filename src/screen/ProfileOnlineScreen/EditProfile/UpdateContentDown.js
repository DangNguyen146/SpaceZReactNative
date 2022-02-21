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
import { connect } from "react-redux";
import {
  AddProfileDownEdit,
  RemoveItemProfileDownEdit,
} from "./modules/action";

const { width } = Dimensions.get("window");

const parentWidth = width;
const childrenWidth = width;
const childrenHeight = 150;

class UpdateContentDown extends Component {
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
    this.props.navigation.navigate("UpdateIconImgProfileScreen", {
      index,
    });
  };
  async componentDidMount() {
    const dataProfileDown = this.props.dataProfileDown;
    if (dataProfileDown) {
      this.setState({
        data: dataProfileDown,
      });
    }
  }
  componentDidUpdate() {
    if (this.props.dataProfileDown !== this.state.data)
      this.setState({ data: this.props.dataProfileDown });
  }
  deleteItem = (index) => {
    this.props.removeItemProfileDown(index);
  };
  addUp = () => {
    this.props.removeItemProfileDown();
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
          Nội dung
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
            this.props.addProfileDown(this.state.data);
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
            if (test) this.props.navigation.navigate("UpdateHomeProfileScreen");
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
            <Image style={styles.item_icon} source={item.icon} />
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
  container: {},
  item: {
    width: childrenWidth,
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
  inputIcon3: {
    position: "absolute",
    top: 15,
    right: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    dataProfileDown: state.contentReducerEdit.dataProfileDown,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProfileDown: (data) => {
      dispatch(AddProfileDownEdit(data));
    },
    removeItemProfileDown: (index = -1) => {
      dispatch(RemoveItemProfileDownEdit(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateContentDown);
