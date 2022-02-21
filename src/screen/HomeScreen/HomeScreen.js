import React, { useEffect } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import AllCategory from '../../components/AllCategory/AllCategory';
import AppStatusBar from '../../components/AppStatusBar';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import NewProduct from '../../components/NewProduct/NewProduct';
import ToolBar from '../../components/ToolBar/ToolBar'; 
import {useDispatch, useSelector} from "react-redux";
import { actListProductApi } from './Modules/action';

export default function HomeScreen() {
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log("run use eff");
      dispatch(actListProductApi());
  },[]);
  const listProductData=useSelector(state=>state.productReducer.data)
 
  

 
  return (
    <View style={styles.screen}  > 
      
        <HeaderContainer/>
  
        <AllCategory/>
        
       
       <NewProduct products={listProductData} />

       
           
          
        
        
        
        
     
        
       
        
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    backgroundColor:"#dcdcdc"
  }
})
