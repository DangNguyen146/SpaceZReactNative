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
  TouchableOpacity,
  Keyboard,
} from "react-native";
import AppStatusBar from "../../../components/AppStatusBar";
import ToolBar from "../../../components/ToolBar/ToolBar";
import String from "../../../theme/String";
import Color from "../../../theme/Color";
import { LOGO_DATA } from "../data/base/BaseLogo";
import { connect } from "react-redux";
import { EditIconProfileDown } from "../CreateProfile/modules/action";

class SelectIconImgProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: LOGO_DATA,
      scrollEnabled: true,
    };
  }
  chaneIcon = (item) => {
    const index = this.props.route.params.index;
    this.props.editIconProfileDown(index, item);
    this.props.navigation.navigate("EditContentDownScreen");
  };
  renderIcon = () => {
    return this.state.data.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.item}
          key={index}
          onPress={() => {
            this.chaneIcon(item);
          }}
        >
          <Image style={styles.icon} source={item.icon} />
        </TouchableOpacity>
      );
    });
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
            color: Color.black,
            fontSize: 20,
            fontFamily: "BalooTamma2-ExtraBold",
            textAlign: "center",
          }}
        >
          Thư viện icon
        </Text>
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEnabled={this.state.scrollEnabled}
        >
          <View style={styles.container}>{this.renderIcon()}</View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: 20,
    marginBottom: 500,
  },
  item: {
    padding: 20,
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    editIconProfileDown: (index, item) => {
      dispatch(EditIconProfileDown(index, item));
    },
  };
};
export default connect(null, mapDispatchToProps)(SelectIconImgProfile);
