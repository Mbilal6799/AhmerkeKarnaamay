import { StyleSheet, Text, Fetch,TouchableOpacity, Image,View } from 'react-native'
import React,{useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Resultproduct = (props) => {
  //console.log(9,props?.arrayFavorite.includes(props.SearchProducts.id))
  //console.log(10,props?.arrayFavorite.map(res =>{return res.id == props.SearchProducts.id ? true : false}))
  var found = false
  // const arrayFavorites= props?.arrayFavorite.check(props.SearchProducts.id)
  for(var i = 0; i < props?.arrayFavorite.length; i++) {
    if (props?.arrayFavorite[i].id == props.SearchProducts.id) {
        found = true;
     break
    }
  
}
  // const arrayFavorites= props?.arrayFavorite.map(res =>{return res.id == props.SearchProducts.id ? true : false})
  // console.log(11,arrayFavorites)

  return (
    <>
    <View  style={styles.backview}>
      <TouchableOpacity onPress={()=>{props.navigate()}}>

         
       <View style={{flexDirection:"row",width:wp("75"),height:hp("14")}}>



<View style={{height:hp("14"),width:wp("40"),marginLeft:wp("5"),justifyContent:"center"}}>

<Text style={{fontWeight:"bold",fontSize:25}}>{props.SearchProducts.Textname}</Text>
{/* <Text 
>{props.SearchProducts.Textgram}</Text> */}
<Text style={{fontWeight:"bold",fontSize:20}}>{props.SearchProducts.Dateofexprie}</Text>
</View>
<View style={{alignSelf:"center",justifyContent:"center",alignItems:"center",backgroundColor:COLOUR.Darkgreen,width:wp("25"),height:hp("14"),borderTopLeftRadius: 30,
        borderBottomRightRadius: 30}}>
<Image  resizeMode='center' style={ {width:wp("20"),height:hp("13"),backgroundColor:"white",borderTopLeftRadius: 30,borderBottomRightRadius: 30}}    
source={props.SearchProducts.imgf}/>
</View>
</View>
</TouchableOpacity>


</View>
<View style={{position:"absolute",width:wp("12"),backgroundColor:"white",marginLeft:hp("39"),backgroundColor:COLOUR.Darkgreen,justifyContent:"center",

      alignItems:"center",borderRadius:25,  height:hp("6"),}}>
<MaterialIcons  onPress={()=>{props.favorite()}}
                   
// name={favoriteList ?'favorite' : 'favorite-outline'}
 name={found == true ?'favorite' : 'favorite-outline'}

size={20}
color={'white'}



/>
</View>
</>
  )
}

export default Resultproduct

const styles = StyleSheet.create({
    backview:{
        width:wp("100"),
        height:hp("15"),
        marginLeft:wp("15"),
        alignSelf:"center",
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        // position:"absolute",
        backgroundColor:COLOUR.white,
        flexDirection:"row",
        // justifyContent:"space-between",
        margin:hp("1.5")
    }
})