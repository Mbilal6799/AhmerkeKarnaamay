import { StyleSheet, Text, View,TextInput,item, Image,FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import {myArray} from '../Screen/Search';
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const AlHistory = ({navigation}) => {
  // const myArray1 = await AsyncStorage.getItem('Searchhistory')
//   let user= await AsyncStorage.getItem('Searchhistory');
//   let parsed=JSON.parse(user);
//   const[item,setItem]=useState('');
//    getname=AsyncStorage.getItem("name")
//   console.log(12,gsetname)
  // // const getData = async () => {
  //   try {
  //       // console.log(12,myArray)
  //     if(myArray !== null) {
  //       setItem(myArray)
  //       console.log(19,myArray)

  //       // value previously stored
  //     }
  //   } catch(e) {

  //       console.log(24,e)

  //     // error reading value
  //   // }
  // }
 
  let uniqueChars = [...new Set(myArray)];
 console.log(35,uniqueChars)
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

      <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>All History</Text>
        </View>
      
      </View>
        
   
     
      </View>
    
           
      <View style={{marginLeft:hp("2"),justifyContent:"center",width:wp("20"),height:hp("5"),backgroundColor:COLOUR.Darkgreen,borderRadius:20,marginTop:hp("5")}}> 
 <Text style={{height:hp("3"),color:COLOUR.white,marginLeft:hp("1.5"),  width:wp("35"),alignItems:"center", fontSize:15,fontWeight:"bold",}}>Results</Text>
     </View>

<FlatList 
    // return 
    data={uniqueChars}
    scrollEnabled={true} 
    numColumns={1}
    horizontal={false}
    inverted={true}
    contentContainerStyle={{paddingTop:hp("30"),paddingBottom:hp("1")}}  
    renderItem={({ item }) => {
        // console.log(87,item);

 
        return (
            <>
    <View  style={styles.backview}>
      <TouchableOpacity >

         
       <View style={{flexDirection:"row",width:wp("75"),height:hp("14")}}>



<View style={{height:hp("14"),width:wp("50"),marginLeft:wp("5"),justifyContent:"center"}}>

<Text style={{fontWeight:"bold",fontSize:25}}>{item?.Textname||item?.name}</Text>
{/* <Text 
>{item?.Textgram}</Text> */}
<Text style={{fontWeight:"bold",fontSize:20}}>{item?.Dateofexprie||item?.Dateofexprie}</Text>
</View>
<View style={{alignSelf:"center",justifyContent:"center",alignItems:"center",backgroundColor:COLOUR.Darkgreen,width:wp("25"),height:hp("14"),borderTopLeftRadius: 30,
        borderBottomRightRadius: 30}}>
<Image  resizeMode='center' style={ {width:wp("20"),height:hp("13"),backgroundColor:"white",borderTopLeftRadius: 30,borderBottomRightRadius: 30}}    
source={item?.imgf||item?.imgf}/>
</View>
</View>
</TouchableOpacity>


</View>

</>
   
   
   
   )
   
}

}
keyExtractor={(item) => item.id}/>

    
   
    
  </View>
  
  
  )
  
}

export default AlHistory

const styles = StyleSheet.create({
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
        // marginLeft:wp("15"),

        // backgroundColor:"blue",
        // marginLeft:wp("10")
        
    },
    Search:{
        width:wp("76"),
        // justifyContent:"center",
        // marginRight:wp("10"),      
        // backgroundColor:"yellow",
        
    },
   
    barcode:{
        height:hp("4"),
        width:wp("35"),
        textAlign:"center",
marginTop:wp("3"),

        // backgroundColor:"red",
        fontSize:15,
        fontWeight:"bold",

    },
    mainsearch:{
        width:wp("90"),
        marginTop:wp("2"),
        height:hp("7"),
        alignSelf:"center",
        borderRadius:15,
        borderWidth:1,
        backgroundColor:COLOUR.white,
    },
    search:{
        // backgroundColor:"red",
        // fontSize:25,
        alignSelf:"center",
        // flexDirection:"row",

        
    },
    Searchbar:{
        height:hp("6"),
        flexDirection:"row",
        width:wp("80"),
       borderRadius:10,
        backgroundColor:COLOUR.white,
    },
    items: {
     
        backgroundColor:'red'
      },
      backview:{
        width:wp("80"),
        height:hp("14"),
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:COLOUR.white,
        flexDirection:"row",
        margin:hp("2")
        // bottom:hp("25")
    }
})