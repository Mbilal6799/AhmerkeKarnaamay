import { StyleSheet, Text,Image, Button,View,useSelector, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Comp from '../Component/Comp';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from 'react-native-animatable';
import COLOUR from '../Colour/Colour';
import { useDispatch } from 'react-redux';
import { LoginUrl } from '../config/Urls';
import  axios  from 'react-native-axios';




const Login = ({navigation}) => {
   const [email,setEmail]=useState(''); 
   const [pass,setpass]=useState(''); 
   const [loading,setLoading]=useState(false);
  //  const userData = useSelector(state => state.userData);
   const dispatch = useDispatch();
   const loginUserFun = () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let headers = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }

  }
  let body = JSON.stringify({
    email: email,
    password: pass,
  });
    if (
      email != '' &&
      pass != '' &&
      reg.test(email) === true &&
      pass.length >= 8
    ) {
      fetch(LoginUrl, {
        method: 'POST',
        body: body,
        headers: headers,
        redirect: 'follow',
      })
        .then(res => {
          statusCode = res.status;
          return res.json();
        })
        .then(json => {
          return {json: json, status: statusCode};
        })
        .catch(err => {
          return {status: statusCode, json: err};
        });
      }
      console.log(34,LoginUrl,body)
    //  fetch
    //     .post(LoginUrl, body,headers)
    //     .then(function (res) {
    //       console.log(35,res)
    //       setLoading(false);
    //       dispatch({
    //         type: types.LoginType,
    //         payload: res?.data,
    //       });
    //       // successMessag('You have been successfully logged In!');
    //     })

    //     .catch(function (error) {
    //       console.log(46,error)
    //       setLoading(false);
    //       // errorMessage(error?.response?.data?.message);
    //     });
    // } 
    // else {
    //   setLoading(false);
    //   console.log(52,"Please type correct information")

    //   // errorMessage('Please type correct information');
    // }
    
  };
    return (
        <View style={{backgroundColor:COLOUR.Darkgreen,flex:1}}>
        <View style={{justifyContent:"center",marginTop:wp("5"),alignItems:"center",}}>
        <Animatable.View 
               animation="fadeInUpBig">
            <MaterialIcons name='arrow-back-ios' 
            style={{fontSize:20,marginRight:wp("80")}}
            onPress={() => navigation.goBack()}/>
            </Animatable.View>
            <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
               animation="fadeInDownBig">
        <Image  style={{ resizeMode: "contain",width:wp("35"),height:hp("20")}}    
        source={require('../Image/Untitled-4.png')}/>
       </Animatable.View>
     </View>
      <View style={{justifyContent:"center",flex:3,   borderTopLeftRadius: 30,
        borderTopRightRadius: 30,marginTop:wp("10"),alignItems:"center",backgroundColor:"white"}}>
            <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
               animation="fadeInUpBig">

<Text style={{fontWeight:"bold",padding:10,marginRight:wp("60")}}>Login</Text>

<Comp value={email} onChangeText={text=>setEmail(text)} reuse={"Email"} Place={"Abc@gmail.com"} home={'alternate-email'}/>

<Comp value={pass} onChangeText={text=>setpass(text)} reuse={"Password"} Place={"Password"} home={'lock-outline'} hedden={true}/>
{/* <TouchableOpacity onPress={() => navigation.navigate('ForgetScreen')}> */}

<TouchableOpacity onPress={() => navigation.navigate('SelectAllergy')}>
  {/* <TouchableOpacity onPress= {()=>{loginUserFun()}}> */}
  <View style={styles.Button}>

<Text style={styles.Login}>Sign In</Text>
        </View >
</TouchableOpacity >
        <View style={{flexDirection:"row",marginTop:wp("20")}}>
              
        <Text style={styles.SignUpHere}>Sign Up Here  </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
      
  <Text style={styles.Register}> Register</Text>

</TouchableOpacity>
</View>


        </Animatable.View>
        </View>
</View>

  )
}

export default Login

const styles = StyleSheet.create({
    Login:{
        color:COLOUR.white,
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
  
    },
    Button:{
        height:hp("6"),
        width:wp("30"),
        backgroundColor:COLOUR.Darkgreen,
        marginTop:wp("10"),
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
        
    },

    SignUpHere:{
        height:hp("5"),
        width:wp("23"),
        // marginTop:wp("20")
    },
    Register:{
        height:hp("5"),
        width:wp("20"),
        fontWeight:"bold",
        color:COLOUR.Darkgreen
      
    },
    // Forget:{
    //   height:hp("4"),
    //   width:wp("30"),
    //   marginLeft:wp("35"),
   
      
    //   borderRadius:10,
    //   justifyContent:"center"
    // },
    
   
  }
)
