import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import { Row } from "react-native-responsive-grid-system";

export default function NewProduct(props) {
  const { products } = props;
  const renderProductCards = () => {
    if (products) {
      return products.map((item) => {
        return <ProductCard  key={item.id} />;
      });
    }
  };
  return (
    <View style={styles.newProductContainer}>
      <View style={styles.textView}>
        <Text style={styles.categoryTitle}>Sản phẩm mới</Text>
        <TouchableOpacity>
          <Text style={styles.clickableText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Row style={{ justifyContent: "space-between" }}>
          {renderProductCards()}
          {/* <ProductCard/> */}
        </Row>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  categoryTitle: {
    fontSize: 16,
    color: "darkslategray",
    fontWeight: "700",
  },
  clickableText: {
    fontSize: 16,
  },
  newProductContainer: {
    marginTop: 6,
    backgroundColor: "white",
  },
});
