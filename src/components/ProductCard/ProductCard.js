import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Col } from "react-native-responsive-grid-system";
export default function ProductCard() {
  return (
    <View  style={styles.cardContainer}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={require("../../assets/images/cards/truoc_2.png")}
        />
        <View>
          <Text style={{ textAlign: "center" }}>Thẻ black 1</Text>
          <Text style={{ paddingLeft: 2 }}>$30.000</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: "100%",

    height: 120,
  },
  cardContainer: {
    // marginHorizontal:1,
    width:"50%",
    paddingHorizontal: 1,
    paddingVertical: 2,

    // flex:1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    elevation: 10,
    // borderColor:"black",
    // borderWidth:1,
    // borderRadius:10
  },
});
