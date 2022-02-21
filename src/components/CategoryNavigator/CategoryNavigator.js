import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function CategoryNavigator() {
  return (
    <View style={styles.categoryContainer}>
        <TouchableOpacity>
        <Text style={{ color: "white", marginHorizontal: 8 }}>Thẻ cứng</Text>      
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{ color: "white", marginHorizontal: 8 }}>Thẻ tròn</Text>      
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{ color: "white", marginHorizontal: 8 }}>Sticker</Text>      
        </TouchableOpacity>
      
     
    </View>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",

    width: "80%",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
