import { StyleSheet, Text, TouchableOpacity,Image, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLOUR from '../Colour/Colour';
import Select from '../Component/Select';
import Checkbox from '../Component/Checkboxs';
import { useIsFocused } from '@react-navigation/native';

const SelectAllergy = ({navigation,props}) => {
const focused =  useIsFocused()
  const[allergys,SelectAllergy]=useState([]);
  const [check,setCheck] = useState(true)
  const [name,setName] = useState({
    Peanut:false,
    Milk:false,
    Soya:false,
Fish:false,
Penut:false,
Wheat:false,
Egg:false,
Prawn:false
})
//  const selectFun= async(text)=>{
// let t = allergys.includes(text)?true:false
// console.log(14,t)
// if(allergys.includes(text))
// t? allergys.filter(e=>e!=text):SelectAllergy([...allergys,text])
// await AsyncStorage.setItem('Checkbox', JSON.stringify(allergys));

// let q= await AsyncStorage.getItem("Checkbox")
// console.log(18,q)
// }
const selectFun = async(v, value) => {
  // if (allergys.includes(v)) {
  //   allergys.filter(e=>e!==v)
  //   await AsyncStorage.setItem('Checkbox', JSON.stringify(allergys));
  // } else {
  //   SelectAllergy([...allergys,v])
  //   // updateState({activities: [...activities, v]});
  // }
  setName( (pre)=>({
    ...pre,
    [v] : !value
  }))
    SelectAllergy([... allergys,v])
  await AsyncStorage.setItem('Checkbox', JSON.stringify(allergys));
};
useEffect(async() => {
  const event = navigation.addListener('focus',async () =>{
    setName({
      Peanut:false,
      Milk:false,
      Soya:false,
  Fish:false,
  Penut:false,
  Wheat:false,
  Egg:false,
  Prawn:false
    })
    SelectAllergy([])
    await AsyncStorage.setItem('Checkbox',[])})
    return event
  },[])

  return (
    <View style={{justifyContent:"center",marginTop:wp("5"),alignItems:"center"}}>
    <MaterialIcons name='arrow-back-ios' 
        style={{fontSize:20,marginRight:wp("80")}}
        onPress={() => navigation.goBack()}/>
         <Image  style={{ resizeMode: "contain",width:wp("25"),height:hp("15")}}    
    source={require('../Image/Untitled-2.png')}/> 
      <View style={styles.rows}>
      <Text style={{fontWeight:"bold",padding:10,marginRight:wp("50")}}>Select your Allergys</Text> 


  <Select check={name.Peanut} style={{backgroundColor:"#F9BB8D",margin:10,flexDirection:"row"}}text={'Peanut'} selectFuns={selectFun}/>
  <Select check={name.Milk} style={{backgroundColor:COLOUR.blue,flexDirection:"row"}}text={'Milk'}selectFuns={selectFun}/>
  <Select check={name.Soya} style={{backgroundColor:"#ECCC69",margin:10,flexDirection:"row",}}text={'Soya'}selectFuns={selectFun}/>
  <Select check={name.Fish} style={{backgroundColor:"#ED978F",flexDirection:"row"}}text={'Fish'}selectFuns={selectFun}/>
  <Select check={name.Penut} style={{backgroundColor: "#F9BB8D",margin:10,flexDirection:"row"}}text={'Penut'}selectFuns={selectFun}/>
  <Select check={name.Wheat} style={{backgroundColor: "#ECCC69",flexDirection:"row"}}text={'Wheat'}selectFuns={selectFun}/>
  <Select check={name.Egg} style={{backgroundColor:COLOUR.blue,margin:10,flexDirection:"row"}}text={'Egg'}selectFuns={selectFun}/>
  <Select check={name.Prawn} style={{backgroundColor:"#ED978F",flexDirection:"row"}}text={'Prawn'}selectFuns={selectFun}/>
    <TouchableOpacity onPress ={()=>{
      allergys.length>0?
        navigation.navigate('Navigation'):
        Alert.alert(
          "Error",
          "Please Select At Least One Category",
          [
            {
              text: "Ok",
              style: "cancel"
            },]
        );
     }}>
      <View style={styles.Button}>
        <Text style={styles.Submit}>Submit</Text>
        </View>

        </TouchableOpacity >
  </View>

  </View>
   

        
       
  )
}

export default SelectAllergy

const styles = StyleSheet.create({

  rows:{
    height:hp("75"),
    width:wp("100"),
justifyContent:"center",
alignItems:"center",


  },
  Button:{
    height:hp("6"),
        width:wp("30"),
        backgroundColor:COLOUR.Darkgreen,
        marginTop:wp("5"),
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
