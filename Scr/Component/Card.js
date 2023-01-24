import { StyleSheet, Text, Image,TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import Data from '../Data/Data';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";


const Card = (props) => {
  // const Icons=props.index==2?COLOUR.lightgraygreen:COLOUR.backlight
  // console.log(props)
  return (
<TouchableOpacity  onPress={()=>{props.navigate()}}>
    <View style={styles.card}>
  
      
  <Image resizeMode={'cover'} style={{height:wp("25"),marginBottom:wp("1.5"),width:wp("40"), 
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,}}
  source={props.Data.img}/> 
  <MaterialCommunityIcons 
  style={{position:"absolute",fontSize:50,width:wp("15"),height:hp("10"),color:COLOUR.white}} 
  name={props.Data.Icons}/>
<Octicons
  style={{position:"absolute",fontSize:50,width:wp("15"),height:hp("10"),color:COLOUR.white}} 
  name={props.Data.Iconss}/>


    <Text style={{fontSize:15,fontWeight:"bold",marginBottom:wp("2"),color:COLOUR.white,}}> 
    {props.Data.name}</Text>

    </View>
</TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        height:hp("20"),
        width:wp("40"),
        marginTop:wp("3"),
        borderRadius:20,
        // borderWidth:1,
        // alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        margin:5,
         backgroundColor:COLOUR.Darkgreen,
        // backgroundColor:"blue"

    }
})