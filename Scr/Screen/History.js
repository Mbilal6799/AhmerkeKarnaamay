import { StyleSheet, Text, Image,View, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import COLOUR from '../Colour/Colour';
import Contactre from '../Component/Contactre';

const History = ({navigation}) => {
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
  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>Contact Us</Text>
    </View>
    
  </View>
  </View>

    <View  style={{flexDirection:"row"}}>
 
    
    </View> 

    
    <View style={{marginTop:wp("2"),flexDirection:"row"}}>

<Image  style={{ resizeMode: "contain",marginLeft:hp("5"),width:wp("20"),height:hp("13")}}    
source={require('../Image/Untitled-2.png')}/> 

<View style={{height:hp("18"),padding:10}}>

<Text style={{padding:3,fontWeight:"bold"}}>Contact Us</Text>
<Text style={{padding:3,fontWeight:"bold"}}
>Recommendation</Text>
<Text style={{padding:3,fontWeight:"bold"}}>Plan Promotion/Donate</Text>
</View>




</View>


<View style={{flexDirection:"row",justifyContent:"center"}}>
<TouchableOpacity onPress={()=> navigation.navigate("Form")}>

<Contactre name={"Contact Us"}  img ={require("../Image/Contactus-cuate.png")}/>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("FromRecommendation")}>
<Contactre name={"Recommendation"}  img ={require("../Image/Recommendation.png")}/>
</TouchableOpacity>
</View>
<View style={{flexDirection:"row",justifyContent:"center"}}>
<Contactre name={"Donate"}  img ={require("../Image/Business.png")}/>

</View>


</View>
    
  )
}

export default History

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
})