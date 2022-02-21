import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import CategoryCard from '../CategoryCard/CategoryCard';
export default function AllCategory() {
  return (
    <View style={{backgroundColor:"white",paddingBottom:10}}>
        <View style={styles.textView}>
          <Text style={styles.categoryTitle}>Tất cả danh mục</Text>
          <TouchableOpacity>
              <Text style={styles.clickableText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/> 
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  textView:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:8,
    paddingVertical:12,
    
  },
  categoryTitle:{
    fontSize:16,
    color:"darkslategray",
    fontWeight:"700",
  },
  clickableText:{
    fontSize:16,
  },
  cardContainer:{
    width:"90%",
    flexDirection:"row",
    justifyContent:"space-around"
  }
})
