import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { TextInput,View,Text,Button,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
export default function Search() {
  return (
      <View style={styles.searchContainer}
      
      >
          <Ionicons name="search" size={24} color="white" />
           <TextInput placeholder='Tìm kiếm danh mục, sản phẩm' placeholderTextColor={"white"} style={styles.searchInput}/>
      </View>
   
       
    
  )
}

const styles=StyleSheet.create(
    {
        searchInput:{
            width:"90%",
            color:"white",
            backgroundColor:"#16062D",
            
          
            
            
        },
        searchContainer:{
            flexDirection:"row",
            borderBottomWidth: 1,
            borderColor: 'white',
            borderWidth:1,
             paddingVertical:6,
              borderRadius:8,
            //   width:"95%",
            justifyContent:"center"
        }
    }
)
