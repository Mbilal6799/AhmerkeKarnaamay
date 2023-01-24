import { StyleSheet, Text,TouchableOpacity, Image,View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';

const Contactre = (props) => {
  return (
   

    <View>
    <View style={styles.favourite}>
<Image style={{resizeMode:'contain',alignSelf:"center",height:hp("19"),width:wp("32"),borderRadius:60}} 
source={props.img}/>
</View>
<Text style={{height:hp("3"),width:wp("42"),margin:5,textAlign:"center",fontWeight:"bold"}}>{props.name}</Text>

    </View>

  )
}

export default Contactre

const styles = StyleSheet.create({

    favourite:{
        height:hp("25"),
        width:wp("40"),
        backgroundColor:COLOUR.Darkgreen,
        borderRadius:20,
        marginLeft:hp("2"),
        justifyContent:"center"
      }
})