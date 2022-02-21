import React from "react";
import { View } from "react-native";

export default function Rectangle(props) {
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
      }}
    ></View>
  );
}
