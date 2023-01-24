import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState} from 'react' ;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const Comp = (props) => {
    const [name, setName] = useState("")

  return (
    <View style={styles.Reuse}>
        <Text style={styles.retext} 
         >{props.reuse}</Text>
         <View  style={styles.input}>   
        <TextInput secureTextEntry={props.hedden} style={{width:wp("55")}} placeholder={props.Place} onChangeText={props?.onChangeText}
        value={props?.value}/>

       <MaterialIcons style={{alignSelf:"center",}} name={props.home}/>


    </View>  
    </View> 
  )
}

export default Comp

const styles = StyleSheet.create({
    Reuse:{
       
    },
    retext:{
        
        width:wp("40 "),
        
        marginTop:wp('2')
    },
    input:{
        height:hp("6"),
         width:wp("60"),
        borderRadius:10,
        borderWidth:0.5,
        flexDirection:"row",
        
         
    },
    
   
})