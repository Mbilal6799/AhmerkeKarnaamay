import { StyleSheet, Text,Image,Dimensions, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';

const Allergiescard = (props) => {
    const bold=props.fontWeight&&'bold'
  return (
        <View  style={{...styles.shorttext,backgroundColor:props.Colors}}>
    
<Image resizeMode='contain' 
              style={{height:hp("3"),width:wp("5"),marginLeft:hp("1"),marginTop:hp("0.5")}} 
source={props.img} />
       
        <Text style={{...styles.shorttext1,fontWeight:bold,}}>{props.shorttexts}</Text>
 
    

     </View>
    
  )
}

export default Allergiescard

const styles = StyleSheet.create({
     shorttext:{

        height:hp("2"),
              width:wp("6"),
            
            marginLeft:wp("6"),
            borderRadius:Math.round(
                Dimensions.get('window').width + Dimensions.get('window').height,
              ),
               marginTop:wp("3"),
              flexDirection:"row",
              borderWidth:0.5,
              // backgroundColor:COLOUR.backlight,
              width: Dimensions.get('screen').width * 0.1,
  height: Dimensions.get('screen').width * 0.1,

  // height:hp("7"),
  // width:wp("12"),
  // borderRadius:Math.round(
  //   Dimensions.get('window').width + Dimensions.get('window').height,
  // ),
  // alignSelf: 'center',
  // width: Dimensions.get('screen').width * 0.11,
  // height: Dimensions.get('screen').width * 0.11,
  // alignItems:"center",
  // justifyContent:"center",

  // alignSelf:'center',

  // borderWidth:1,


},
      

      shorttext1:
        {fontSize:14,height:hp("5"),width:wp('100'),marginLeft:wp("5"),marginTop:hp("1")}
      }
    
      

)