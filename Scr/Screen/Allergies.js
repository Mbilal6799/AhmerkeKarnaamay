import { StyleSheet,Image, Text, View ,Linking, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import COLOUR from '../Colour/Colour';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons"
import Allergiescard from '../Component/Allergiescard';
import Eggcard from '../Component/Eggcard';

import Entypo from "react-native-vector-icons/Entypo";

import * as Animatable from 'react-native-animatable';
const Allergies = ({navigation,route}) => {
 const [model,setModel]=useState(false);
 const [models,setModels]=useState(false);

  const item =route.params
  // console.log(item,13)
  const navigate=(item)=>{

      navigation.navigate("category",item)
      // console.log(13,item)
      
    }
    const navigates=()=>{
      setModel(true)
  }
  const navigatess=()=>{
    setModels(true)
  }
    
  return (
    <View style={styles.header}>
    <View style={{...styles.colum,backgroundColor:item.Color}}>
    <View style={{flexDirection:"row"}}>
<View style={styles.arrowback}>
    <MaterialIcons name='arrow-back-ios' 
    style={{fontSize:22,alignSelf:"center"}}
    onPress={() => navigation.goBack()}/>
    </View>
    <View style={styles.Search}>
  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold"}}>Allergies</Text>
    </View>
    <View style={styles.menu}>
  
  
  </View>
  </View>
  </View>

    <View  style={{flexDirection:"row"}}>
 
    
   <Allergiescard img={item.img} Colors={item.Color} fontWeight={true} shorttexts={item.name}/>
   
   
   {model && <Animatable.View  style={{...styles.Eggcards,backgroundColor:item.Color}} animation={'fadeInLeft'} > 


    <Entypo name='cross'  onPress={()=>setModel(false)} style={{fontSize:hp("5"),alignSelf:"flex-end"}}/>
      

    <View style={styles.Eggcardss}>
  <Text>Binding methods helps ensure that the {'\n'}second snippet works the same way as the{'\n'} first one.

  {'\n'} For example,{'\n'} passes this.handleClick so you want{'\n'} to bind it. However,{'\n'} it is unnecessary to bind {'\n'}the render method or the lifecycle methods:{'\n'} we don’t pass them to other components.

  {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
  {'\n'}This post by Yehuda Katz explains  
  {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
  {'\n'}This post by Yehuda Katz explains  

</Text>

   
    </View>
   
   
    </Animatable.View>}
  
   {models && <Animatable.View  style={{...styles.Eggcards,backgroundColor:item.Color}}  animation={'fadeInRight'} > 


    <Entypo name='cross'  onPress={()=>setModels(false)} style={{fontSize:hp("5"),alignSelf:"flex-start",}}/>
      
  
    <View style={styles.Eggcardss}>
  <Text>Binding methods helps ensure that the {'\n'}second snippet works the same way as the{'\n'} first one.

  {'\n'} For example,{'\n'} passes this.handleClick so you want{'\n'} to bind it. However,{'\n'} it is unnecessary to bind {'\n'}the render method or the lifecycle methods:{'\n'} we don’t pass them to other components.

  {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
  {'\n'}This post by Yehuda Katz explains  
  {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
  {'\n'}This post by Yehuda Katz explains  

</Text>
 
    </View>
    </Animatable.View>}

     </View> 
    
<View style={styles.Eggcenter}>
<View style={{flexDirection:"row",}}>
<View>

</View>

<Eggcard  img={item.img1}Colors={item.Color} name={item.namea} navigates={navigates}  />
<Eggcard img={item.img2} Colors={item.Color} name={item.nameC} navigates={navigatess}/>



</View>
{/* <Eggcard name={item.nameA}/> */}

<TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/')}S>

<View style={styles.longcardss}>
   
<Image resizeMode='cover'style={{width:wp("82"),height:hp("30") ,borderRadius:20}}
    source={item.imgmain}
    />
    <MaterialIcons  style={{position:"absolute",fontSize:60,color:COLOUR.white}} 
    name='play-circle-outline'/>
   
    </View>
    </TouchableOpacity>
    

    <Text style={{fontWeight:"bold",marginTop:hp("1")}}> ────────────   Symptom   ────────────</Text>
    
    
</View>


<Allergiescard img={item.img} Colors={item.Color} shorttexts={item.Details1} />
<Allergiescard img={item.img} Colors={item.Color} shorttexts={item.Details2} />
<Allergiescard img={item.img} Colors={item.Color} shorttexts={item.Details3} />




    
    </View>
  )
}

export default Allergies

const styles = StyleSheet.create({
  header:{
    
  }, 
  
  colum:{
      height:hp("8"),
      width:wp("100"),
      justifyContent:"center",
      alignContent:"center",
      // backgroundColor:COLOUR.Naviblue,
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
  Eggcenter:{
    justifyContent:"center",
    alignItems:"center",
    
  },
  longcardss:{
    height:hp("30"),
    width:wp("82"),
    margin:10,
    borderRadius:20,  
    alignItems:"center",
    justifyContent:"center",
    // margin:5,
    backgroundColor:COLOUR.Naviblue,

},
shorttext:{
  height:hp("3"),
        width:wp("5"),
        borderRadius:30,
        marginLeft:wp("6"),
        marginTop:wp("3"),
        flexDirection:"row",
        backgroundColor:COLOUR.backlight,
},
Eggcards:{
  height:hp("80"),
  width:wp("90"),
  marginTop:hp("1"),
  borderRadius:20,
  justifyContent:"center",
  backgroundColor:COLOUR.backlight,
  zIndex:1,
left:wp("5"),
  position:"absolute"

},
Eggcardss:{
  height:hp("70"),
  width:wp("80"),
  alignSelf:"center",
  
}
  
})