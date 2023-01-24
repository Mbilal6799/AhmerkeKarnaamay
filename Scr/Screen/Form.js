import { StyleSheet, Text,TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import COLOUR from '../Colour/Colour';
import Comp from '../Component/Comp';

const Form = ({navigation}) => {
  const [name, setName] = useState("")
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

  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>Contact Us Form</Text>
    </View>
  
  </View>
    

 
  </View>
  <View style={{justifyContent:"center",marginTop:wp("10"),alignItems:"center",}}>

  
  <Comp reuse={"FullName"} Place={"Name"}  home={'home'} />
<Comp reuse={"Email"} Place={"Abc@gmail.com"} home={'alternate-email'}/>

<Text style={{ width:wp("60"),marginTop:wp('2')}}>Description</Text>
<View  style={styles.input}>  
<TextInput placeholder={'note'} onChangeText={text=>setName(text)}
        value={name}/>
        {/* <AntDesign  style={{backgroundColor:"red"}}name={'filetext1'}/> */}


</View>
<View style={styles.Button}>
<Text style={styles.Submit}>Submit</Text>
  
</View>
  </View>
  </View>

  )
}

export default Form

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
      
  }, input:{
    
  height:hp("30"),
       width:wp("60"),
      borderRadius:10,
      borderWidth:0.5,
   
   
},
Button:{
  height:hp("6"),
  width:wp("30"),
  backgroundColor:COLOUR.darkblue,
  marginTop:wp("10"),
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