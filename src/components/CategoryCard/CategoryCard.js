import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
export default function CategoryCard() {
  return (
    <TouchableOpacity>
      <View>
        <Image
          style={styles.img}
          source={require("../../assets/images/category/hardCard.png")}
        />
        <Text style={{textAlign:"center"}}>Thẻ cứng</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
  },
});
