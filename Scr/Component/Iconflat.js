import { StyleSheet, Text, FlatList ,View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Shortcards from './shortcards'
const Iconflat = (props) => {
    // console.log(5,props)
  return (
  
    <FlatList 
    data={props.Icon} 
    scrollEnabled={true} 
    nestedScrollEnabled={true}
   numColumns={4}
   contentContainerStyle={{paddingTop:hp("1")}}
//    horizontal={true}
   renderItem={({item,index})=> 
    <Shortcards  
    index={index} navigate={props?.navigate} Data={item} />}/>
       
     )
   }
   
  
  


export default Iconflat

const styles = StyleSheet.create({


 
})