import { StyleSheet, Text, Image,View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import Checkbox from '../Component/Checkboxs';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Select = (props) => {
  // console.log(10,props.selectFuns)
  return (
    <View style={{...styles.Select,...props.style}}>
      
      
      
      <Checkbox 
      selectFuns={(e)=>props.selectFuns(e)} 
      check={props?.check}
      testallergy={props.text}/>
      

      <Text style={styles.text}>{props.text}</Text>
   
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
  Select:{

    height:hp("5.5"),
   
    width:wp("50"),
    borderRadius:15,
    backgroundColor:COLOUR.Naviblue,


  },
  text:
  {
    height:hp("5"),
    width:wp("40"),
fontWeight:"bold",
fontSize:20,
    flexDirection:"row",

    alignSelf:"center",
   
   
  }
})