import { StyleSheet, Text,TouchableOpacity, Image,View, } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import * as Animatable from 'react-native-animatable';
const LongCards = (props) => {
  return (
    <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInLeftBig">
    <TouchableOpacity  onPress={()=>{props?.navigates()}}>

    <View style={styles.longcards}>
    <Image resizeMode='cover'style={{width:wp("83"),height:hp("20"),marginBottom:wp("3") ,  borderTopLeftRadius: 20,
    borderTopRightRadius: 20}}
    source={require('../Image/main.jpg')}
    />
      <Text style={{fontSize:15,fontWeight:"bold",marginBottom:wp("2"),color:COLOUR.white}}>
      What are food allergies
      </Text>
    </View>
    </TouchableOpacity>
  </Animatable.View>
  )
}

export default LongCards

const styles = StyleSheet.create({

    longcards:{
        height:hp("25"),
        width:wp("83"),
        borderRadius:20,  
        alignItems:"center",
        justifyContent:"center",
        // margin:5,
        backgroundColor:COLOUR.Darkgreen,
    
    }
})