import { StyleSheet, Text, View,Dimensions, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import COLOUR from '../Colour/Colour';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const width=Dimensions.get("screen").width/2-30
const CardDetails = (props) => {
  return (
    
        <TouchableOpacity onPress={()=>navigation.navigate("Details",plant)}>
   <View style={{...styles.Select,...props.style}}>
      

   <Text style={{margin:10,flexDirection:"row"}}text={'Peanut'}>
    Ahmer
  </Text>
    </View>
    </TouchableOpacity>
    )
  
}

export default CardDetails

const styles = StyleSheet.create({

  Select:{

    height:hp("5.5"),
   
    width:wp("50"),
    borderRadius:15,
    backgroundColor:COLOUR.Naviblue,


  },
      
})