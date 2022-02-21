import React from "react";
import { View } from "react-native";

export default function Ellipse(props) {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: props.backgroundColor,
        borderRadius: 50,
        borderWidth: 2,
        borderColor:
          props.backgroundColor.slice(0, 4) == "#FFF"
            ? "#000"
            : props.backgroundColor,
      }}
    ></View>
  );
}
