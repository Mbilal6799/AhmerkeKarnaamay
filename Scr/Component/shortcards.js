import { StyleSheet,TouchableOpacity, Text,Dimensions, Image,View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const Shortcards = (props) => {
// console.log(props)
  return (
    <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInUpBig">
    <TouchableOpacity  onPress={()=>{props?.navigate()}}>

     <View style={{width:wp("18"),height:hp("10")}}>

     <Text style={{padding:4,fontSize:10,textAlign:'center',fontWeight:"bold"}}> 
          {props.Data.name}</Text>
      
    <View style={{...styles.shortcards,backgroundColor:props.Colors}}>

<Image  resizeMode='contain'  
style={{height:hp('5'),width:wp('6')}}
source={props.Data.img}/>
  </View>
  

    
    </View>
</TouchableOpacity>
</Animatable.View>
  )
}

export default Shortcards

const styles = StyleSheet.create({

    shortcards :{
        height:hp("7"),
        width:wp("12"),
        borderRadius:Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ),
        alignSelf: 'center',
        width: Dimensions.get('screen').width * 0.11,
        height: Dimensions.get('screen').width * 0.11,
        alignItems:"center",
        justifyContent:"center",
 
        alignSelf:'center',

        borderWidth:1,
      
    
    }
})