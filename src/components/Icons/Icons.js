import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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

export default function Icons(props) {
  return (
    <>
      {props.name === "AntDesign" ? (
        <AntDesign
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Entypo" ? (
        <Entypo
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Feather" ? (
        <Feather
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "EvilIcons" ? (
        <EvilIcons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "FontAwesome" ? (
        <FontAwesome
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "FontAwesome5" ? (
        <FontAwesome5
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Fontisto" ? (
        <Fontisto
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Foundation" ? (
        <Foundation
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Ionicons" ? (
        <Ionicons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "MaterialCommunityIcons" ? (
        <MaterialCommunityIcons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "MaterialIcons" ? (
        <MaterialIcons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Octicons" ? (
        <Octicons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "SimpleLineIcons" ? (
        <SimpleLineIcons
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
      {props.name === "Zocial" ? (
        <Zocial
          name={props.icon}
          size={props.size ? props.size : 24}
          color={props.color ? props.color : "black"}
          style={{
            marginHorizontal: props.marginHorizontal,
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
