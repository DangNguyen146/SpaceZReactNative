import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function ToolBar(props) {
  return (
    <View style={styles.toolBar}>
      <LinearGradient
        colors={["#233340", "#16062D"]}
        style={{
          height: 70,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.icon ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.toggle}
            onPress={props.onPress}
          >
            {props.name === "AntDesign" ? (
              <AntDesign name={props.icon} size={24} color="black" />
            ) : props.name === "Entypo" ? (
              <Entypo name={props.icon} size={24} color="black" />
            ) : props.name === "Feather" ? (
              <Feather name={props.icon} size={24} color="black" />
            ) : props.name === "EvilIcons" ? (
              <EvilIcons name={props.icon} size={24} color="black" />
            ) : props.name === "FontAwesome" ? (
              <FontAwesome name={props.icon} size={24} color="black" />
            ) : props.name === "FontAwesome" ? (
              <FontAwesome5 name={props.icon} size={24} color="black" />
            ) : props.name === "Fontisto" ? (
              <Fontisto name={props.icon} size={24} color="black" />
            ) : props.name === "Foundation" ? (
              <Foundation name={props.icon} size={24} color="black" />
            ) : props.name === "Ionicons" ? (
              <Ionicons name={props.icon} size={24} color="black" />
            ) : props.name === "MaterialCommunityIcons" ? (
              <MaterialCommunityIcons
                name={props.icon}
                size={24}
                color="black"
              />
            ) : props.name === "MaterialIcons" ? (
              <MaterialIcons name={props.icon} size={24} color="black" />
            ) : props.name === "Octicons" ? (
              <Octicons name={props.icon} size={24} color="black" />
            ) : props.name === "SimpleLineIcons" ? (
              <SimpleLineIcons name={props.icon} size={24} color="black" />
            ) : props.name === "SimpleLineIcons" ? (
              <Zocial name={props.icon} size={24} color="black" />
            ) : (
              ""
            )}
          </TouchableOpacity>
        ) : null}
        {/* <Text style={styles.toolbarTitle}>{props.title}</Text> */}
        <View style={styles.center}>
          <Image style={styles.logoImage}  source={require("../../assets/images/logo/logo-image.png")} />
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo/logo-text.png")}
          />
         <Feather name="shopping-cart" size={24} color="white" style={{marginRight:4}} />
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 10,
        }}
      >
        {props.children}
      </View>
    </View>
  );
}

ToolBar.propTypes = {};

export default ToolBar;
