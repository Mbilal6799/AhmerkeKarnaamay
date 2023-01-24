import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Flate = (props) => {


  // console.log(props)
  return (
    
<FlatList 
 data={props.Datas} 
 scrollEnabled={true} 
 nestedScrollEnabled={true}
// numColumns={3}
contentContainerStyle={{paddingBottom:hp("3")}}
horizontal={true}
renderItem={({item,index})=> 
<Card   
  
 index={index} navigate={props?.navigate} Data={item} />}/>
    
  )
}

export default Flate

const styles = StyleSheet.create({})