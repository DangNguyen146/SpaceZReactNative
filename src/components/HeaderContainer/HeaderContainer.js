import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppStatusBar from "../AppStatusBar";
import CategoryNavigator from "../CategoryNavigator/CategoryNavigator";
import Search from "../Search/Search";
import ToolBar from "../ToolBar/ToolBar";
export default function HeaderContainer() {
  return (
    <LinearGradient colors={["#233340", "#16062D"]}>
      <AppStatusBar backgroundColor="#23313F" barStyle="light-content" />
      <ToolBar name="MaterialCommunityIcons" />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Search />
      </View>
      <CategoryNavigator />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {},
});
