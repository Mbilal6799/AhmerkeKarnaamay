import { StyleSheet, Image,TextInput,Text, View,Touchable, TouchableOpacity, ScrollView } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Comp from '../Component/Comp';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from 'react';
import COLOUR from '../Colour/Colour';

const Product = ({navigation}) => {
const [userImage, setuserImage] = useState();
const [name, setName] = useState("")
const pickImagefromCamera = () => {
  launchCamera(
    {
      selectionLimit: 1,
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
    },
    res => {
      if (!res?.didCancel) {
        setuserImage(res?.assets)
        // updateState({userImage: res?.assets});
      }
    },
  );
};
    
  
      return (
        <View style={styles.header}>
    <View style={styles.colum}>
    <View style={{flexDirection:"row"}}>
<View style={styles.arrowback}>
    <MaterialIcons name='arrow-back-ios' 
    style={{fontSize:22,alignSelf:"center"}}
    onPress={() => navigation.goBack()}/>
    </View>
    <View style={styles.Search}>
  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold"}}>Add product Description</Text>
    </View>
    <View style={styles.menu}>
  <Ionicons  name={"md-settings-outline"}
  style={{fontSize:22,alignSelf:"center"}}/>
  </View>
  </View>
  </View>
        
     <ScrollView>
        <View style={styles.Product}>
    {/* <Image resizeMode='cover'style={{width:wp("80"),height:hp("100"),alignSelf:"center" }}
    source={require('../Image/028400097802.jpg')}
    /> */}
    <Comp reuse={"Barcode Number"} Place={"Number"} />
    <Comp reuse={"Name of Product"} Place={"Name"} />
    <Comp reuse={"Date Of Expire"} Place={"Name"} />
   
    <Text style={{width:wp("60"),marginTop:hp("2")}}>Description</Text>
<View  style={styles.inputs}>  
<TextInput placeholder={''} onChangeText={text=>setName(text)}
        value={name}/>
    
    
   </View>
   <Text style={{width:wp("60"),marginTop:hp("2")}}>Add Front Image</Text>
   <View  style={styles.input}>  

  < MaterialCommunityIcons onPress={()=>pickImagefromCamera()} name='image-plus'
  style={{fontSize:30,alignSelf:"center",}} />

 </View>
 <Text style={{width:wp("60"),marginTop:hp("2")}}>Add Backend Image</Text>
   <View  style={styles.input}>  
 
 

  < MaterialCommunityIcons onPress={()=>pickImagefromCamera()} name='image-plus'
  style={{fontSize:30,alignSelf:"center"}} />
  </View>



 <View style={styles.Button}>
<Text style={styles.Submit}>Submit</Text>
  
</View>



   
    </View>
    </ScrollView>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  header:{
    
  }, 
  
  colum:{
      height:hp("8"),
      width:wp("100"),
      justifyContent:"center",
      alignContent:"center",
      backgroundColor:COLOUR.backlight,
  
     
  
  },
  arrowback:{
      width:wp("12"),
      
      
  },
  Search:{
      width:wp("76"),
      
      
  },
  menu:{
      width:wp("12"),
      
  },inputs:{
    height:hp("30"),
       width:wp("60"),
      borderRadius:10,
      borderWidth:0.5,
  },
   input:{
    
  height:hp("30"),
       width:wp("60"),
      borderRadius:10,
      borderWidth:0.5,
   
   
},

    Product:{
      flex:1,
        
        alignItems:"center",
        justifyContent:"center",
    
    
    },input:{
      height:hp("30"),
       width:wp("60"),
      borderRadius:10,
      borderWidth:0.5,
    justifyContent:"center",
      
    
  },
  Button:{
    height:hp("6"),
    width:wp("30"),
    backgroundColor:COLOUR.darkblue,
    marginBottom:wp("15"),
    marginTop:wp("4"),
    borderRadius:15,
    
    
  },
  Submit:{
    color:COLOUR.white,
    fontSize:15,
    fontWeight:"bold",
    alignSelf:"center",
    marginTop:wp("2")
  }
})