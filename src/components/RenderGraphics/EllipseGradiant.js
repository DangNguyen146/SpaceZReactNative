import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function EllipseGradiant(props) {
  return (
    <LinearGradient
      colors={[props.color1, props.color1]}
      style={{
        width: 20,
        height: 20,
        width: "100%",
      }}
    ></LinearGradient>
  );
}
