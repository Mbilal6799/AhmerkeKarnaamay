import { StyleSheet, Text, View,Dimensions, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import COLOUR from '../Colour/Colour';
import { Data } from '../Data/Data';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const width=Dimensions.get("screen").width/2-30
const Test = (props) => {
    console.log(props)
  return (
    
        <TouchableOpacity onPress={()=>navigation.navigate("Details",plant)}>
   <View style={{...styles.Select,...props.style}}>
      
   <Image style={{ resizeMode: "center",marginLeft:hp("2"),width:wp("20"),height:hp("15")}} 
           source={props.images.img1}/>
              <Image style={{ resizeMode: "center",marginLeft:hp("2"),width:wp("20"),height:hp("15")}} 
           source={props.images.img2}/>
      {/* <Text style={styles.text}>{props.text}</Text> */}
   
    </View>
    </TouchableOpacity>
    )
  
}

export default Test

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