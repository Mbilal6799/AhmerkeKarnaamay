import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Eggcard from './Eggcard';



const Eggflate = (props) => {


  // console.log(props)
  return (
    
<FlatList 
 data={props.Eggdata} 
 scrollEnabled={true} 
 nestedScrollEnabled={true}
// numColumns={3}
contentContainerStyle={{paddingBottom:hp("3")}}
horizontal={true}
renderItem={({item,index})=> 
<Eggcard  
  
 index={index} navigate={props?.navigate} Data={item} />}/>
    
  )
}

export default Eggflate

const styles = StyleSheet.create({})