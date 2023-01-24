import { StyleSheet, Text,Image,Button, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Comp from '../Component/Comp';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import * as Animatable from 'react-native-animatable';
const Registration = ({navigation}) => {
    // navigation.navigate("Login") 
  return (
    <View style={{backgroundColor:COLOUR.Darkgreen,flex:1}}>
        <View style={{justifyContent:"center",marginTop:wp("10"),alignItems:"center",}}>
        <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
               animation="fadeInDownBig">
        <Image  style={{ resizeMode: "contain",width:wp("35"),height:hp("20")}}    
        source={require('../Image/Untitled-4.png')}/>
        </Animatable.View>
     </View>
      <View style={{justifyContent:"center",flex:3,  borderTopLeftRadius: 30,
        borderTopRightRadius: 30,marginTop:wp("10"),alignItems:"center",backgroundColor:"white"}}>
         <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
               animation="fadeInUpBig"> 
        <Text style={{fontWeight:"bold",padding:10,marginRight:wp("50")}}>Registration</Text>


<Comp reuse={"Full Name"} Place={"Name"}  home={'home'} />

<Comp reuse={"Email"} Place={"Abc@gmail.com"} home={'alternate-email'}/>

<Comp reuse={"Password"} Place={"Password"} home={'lock-outline'}hedden={true}/>

<Comp reuse={"Confirm Password"} Place={"Confirm Password"}home={'lock-outline'} hedden={true}/>
<TouchableOpacity onPress={() => navigation.navigate('Login')}>

<View style={styles.Button}>
<Text style={styles.SignUp}>Sign Up</Text>
        </View>
</TouchableOpacity>
</Animatable.View>
</View>

    </View>
  
  )
}

export default Registration

const styles = StyleSheet.create({
   
    SignUp:{
        color:COLOUR.white,
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
    },
    Button:{
        height:hp("6 "),
        width:wp("30"),
        backgroundColor:COLOUR.Darkgreen,
        marginTop:wp("5"),
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
        
    }

})