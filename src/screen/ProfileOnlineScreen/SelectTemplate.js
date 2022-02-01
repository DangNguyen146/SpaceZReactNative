import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ListRenderItem,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import AppStatusBar from "../../components/AppStatusBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import Color from "../../theme/Color";
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import ScrollableTabBar from "@valdio/react-native-scrollable-tabview/lib/ScrollableTabBar";

const { width: WIDTH } = Dimensions.get("window");
export default class SelectTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const slug = this.props.route.params.slug;
    return (
      <>
        <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
        <ToolBar
          name="MaterialCommunityIcons"
          onPress={() => navigation.openDrawer()}
        ></ToolBar>
        <Text
          style={{
            textAlign: "center",
            color: Color.black,
            fontSize: 20,
            fontFamily: "BalooTamma2-ExtraBold",
          }}
        >
          Danh sách mẫu
        </Text>
        <ScrollableTabView
          style={{
            backgroundColor: Color.white,
          }}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <ScrollView tabLabel="Cập nhật mới nhất">
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  this.props.navigation.navigate("EditHomeProfileScreen", {
                    slug: slug,
                    idTemplate: 0,
                  });
                }}
              >
                <Image
                  style={styles.itemImage}
                  source={require("../../assets/images/profile/screen.png")}
                />
                <Text style={{ textAlign: "center" }}>Cơ bản 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image
                  style={styles.itemImage}
                  source={require("../../assets/images/profile/screen.png")}
                />
                <Text style={{ textAlign: "center" }}>Cơ bản 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image
                  style={styles.itemImage}
                  source={require("../../assets/images/profile/screen.png")}
                />
                <Text style={{ textAlign: "center" }}>Cơ bản 1</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Màu">
            <View>
              <Text>Màu</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Sáng tạo">
            <View>
              <Text>Sáng tạo</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Tối">
            <View>
              <Text>Tối</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Sáng">
            <View>
              <Text>Sáng</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "48%", // is 50% of container width
    padding: 4,
    margin: 4,
    alignItems: "center",
  },
  itemImage: {
    resizeMode: "stretch",
    width: "90%",
    height: 300,
  },
});
