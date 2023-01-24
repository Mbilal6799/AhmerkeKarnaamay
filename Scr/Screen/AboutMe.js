import { StyleSheet, Text,Image, View, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import COLOUR from '../Colour/Colour';
import Allergiescard from '../Component/Allergiescard';
import Contactre from '../Component/Contactre';

const AboutMe = ({navigation}) => {
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
  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>About Me</Text>
    </View>
    
  </View>
  </View>

   
      <View style={{marginTop:wp("2"),flexDirection:"row"}}>

    <Image  style={{ resizeMode: "contain",marginLeft:hp("5"),width:wp("20"),height:hp("13")}}    
    source={require('../Image/Untitled-2.png')}/> 
 
<View style={{height:hp("18"),padding:10}}>

<Text style={{padding:3,fontWeight:"bold"}}> Favourite  | To Reset</Text>
    <Text style={{padding:3,fontWeight:"bold"}}
    > History</Text>
    <Text style={{padding:3,fontWeight:"bold"}}> Add Allergy</Text>
</View>

  <TouchableOpacity onPress={() => navigation.navigate('Details')}>
<View style={styles.reset}>

    
<Text style={{fontWeight:"bold",color:COLOUR.white,alignSelf:'center'}}>Reset</Text>
</View>
  </TouchableOpacity>


    </View>
<View style={{flexDirection:"row",justifyContent:"center"}}>
<TouchableOpacity onPress={()=> navigation.navigate("Allfavourite")}>

<Contactre name={"Favourite"}  img ={require("../Image/5.png")}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("AlHistory")}>

<Contactre name={"History"}  img ={require("../Image/Stampcollecting-rafiki.png")}/>
</TouchableOpacity>
</View>
<View style={{flexDirection:"row",justifyContent:"center"}}>
<TouchableOpacity onPress={()=> navigation.navigate("SelectAllergy")}>

<Contactre name={"Add Allergy"}  img ={require("../Image/Add.png")}/>
</TouchableOpacity>


</View>

    </View>
  )
}

export default AboutMe

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
  reset:{
    height:hp("4"),
    width:wp("20"),
    backgroundColor:COLOUR.Darkgreen,
    borderRadius:20,
    justifyContent:"center"
  },
 

})