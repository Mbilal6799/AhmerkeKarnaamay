import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLOUR from '../Colour/Colour';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import * as Animatable from 'react-native-animatable';

const Addproduct = ({navigation}) => {
    // const navigate=()=>{
    //   navigation.navigate("Product")
      // console.log(13,item)
  // }
  return (
    <View style={styles.header}>
        <View style={styles.colum}>

        
        <View style={{flexDirection:"row"}}>

<View style={styles.arrowback}>

        <MaterialIcons name='arrow-back-ios' 
        style={{fontSize:22,alignSelf:"center",color:COLOUR.white}}
        onPress={() => navigation.goBack()}/>
        </View>
    <View style={styles.Search}>
  <Text style={{fontSize:20,alignSelf:"center",color:COLOUR.white,fontWeight:"bold"}}>Add Product</Text>
    </View>
   
  </View>
  </View>
  <View style={{height:hp("5"),justifyContent:"center",alignItems:"center"}}>
  <Text style={styles.Scanbarcode}>Scan a barcode</Text>
</View>


  <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInRightBig">
  <TouchableOpacity onPress={()=>{navigation.navigate('Barcode')}}>

  <View style={styles.product}>
  <Image resizeMode='cover'style={{width:wp("80"),height:hp("30") ,borderRadius:20}}
    source={require('../Image/Barcode.jpg')}/>
    <MaterialCommunityIcons
  style={{position:"absolute",fontSize:100,alignSelf:"center",color:COLOUR.white}} 
  name="qrcode-scan"/>
  </View>
  </TouchableOpacity>
  </Animatable.View>
  
  
  <Text style={styles.Detailtext}>Point the camera directly at the product code</Text>
  <View style={{height:hp("5"),justifyContent:"center",alignItems:"center"}}>
  <Text style={styles.Scanbarcode}>Upload a packaging photo</Text>
  </View>
  
  
  
  
  <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInLeftBig">
  <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
  
  <View style={styles.products}>
  <Image resizeMode='cover'style={{width:wp("80"),height:hp("30"),borderRadius:20}}
    source={require('../Image/Search.jpg')} />
<MaterialCommunityIcons 
  style={{position:"absolute",fontSize:100,alignSelf:"center",color:COLOUR.white}} 
  name="camera-plus-outline"/>
  </View>
</TouchableOpacity>
</Animatable.View>
  <Text style={styles.Detailtext}>Take a clear photo of {'\n'} the front of the product packaging</Text>
  </View>
  )
}

export default Addproduct

const styles = StyleSheet.create({
  header:{
    
}, 

colum:{
      height:hp("10"),
        width:wp("100"),
        // marginTop:wp("5"),
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLOUR.Darkgreen,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

   

},
arrowback:{
    width:wp("12"),

    
},
Search:{
    width:wp("76"),

},
menu:{
    width:wp("12"),
  


},

Scanbarcode:{
  
  textAlign:"center",
  fontSize:18,
    fontWeight:"bold",
},
    product:{
    height:hp("30"),
    width:wp("80"),
    justifyContent:"center",
    alignSelf:"center",
    borderRadius:20,
    backgroundColor:COLOUR.backlight

},products:{
  height:hp("30"),
  width:wp("80"),
  justifyContent:"center",
  alignSelf:"center",
  borderRadius:20,
  backgroundColor:COLOUR.backlight

}, 
  Detailtext:{
  textAlign:"center",
  fontSize:12,
  margin:5,
    fontWeight:"bold",
    
}
})