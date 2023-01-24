import { StyleSheet, Text, Image,TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import Data from '../Data/Data';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const Eggcard = (props) => {
  // const Icons=props.index==2?COLOUR.lightgraygreen:COLOUR.backlight
 
  return (
<TouchableOpacity  onPress={()=>{props.navigates()}}>
    <View style={{...styles.eggcard,backgroundColor:props.Colors}}>
  
      
  <Image resizeMode={'cover'} style={{height:wp("30"),marginBottom:wp("2"),width:wp("40"), 
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,}}
   source={props.img}/> 

    <Text style={{fontSize:15,marginBottom:wp("2"),fontWeight:"bold"}}> 
    {props.name}</Text>
    

    </View>
</TouchableOpacity>
  )
}

export default Eggcard

const styles = StyleSheet.create({
    eggcard:{
        height:hp("18"),
        width:wp("40"),
        marginTop:wp("3"),
        borderRadius:20,
        // borderWidth:1,
        // alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        margin:5,
         backgroundColor:COLOUR.Naviblue,
        // backgroundColor:"blue"

    }
})