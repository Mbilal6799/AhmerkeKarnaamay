import { StyleSheet, Text, Image,View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
const ExtraSelect = (props) => {
  return (
    <View style={{flexDirection:"row", alignSelf:"center"}}>
    <View style={{...styles.Select,...props.style}}>
      
      

      <Text style={styles.text}>{props.text}</Text>
 
    <View style={styles.red}>
    </View>

      </View>
      </View>
  )
}

export default ExtraSelect

const styles = StyleSheet.create({
  Select:{

    height:hp("5.5"),
    alignSelf:"center",
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
marginTop:hp("0.5"),
  
  textAlign:"center"
   
   
  },
  red:{
    height:hp("5"),
   
    width:wp("15"),
    borderRadius:15,
    backgroundColor:COLOUR.Naviblue,


  }
})