import { ScrollView, StyleSheet, handleMenu,render,TouchableOpacity,Image,Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import { Data, Data2, Data3 } from '../Data/Data';
import LongCards from '../Component/LongCards';
import Entypo from "react-native-vector-icons/Entypo";
import * as Animatable from 'react-native-animatable';
import Shortcards from '../Component/shortcards'
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Allergiescard from '../Component/Allergiescard';
import Icon from 'react-native-vector-icons/EvilIcons'
import {OffCanvas3D} from 'react-native-off-canvas-menu'


const Category = ({navigation}) => {
  // this.state = {
  //   menuOpen: false
  // }
  // handleMenu() 
  //   const {menuOpen} = this.state
  //   this.setState({
  //     menuOpen: !menuOpen
  //   })
  
  
navigate_info_alergi =(item)=>{
    navigation.navigate('Allergies',item)
    }
  const navigate2=(item)=>{
    navigation.navigate("Barcode",item)
    // navigation.navigate("Search")
 
}
const navigate3=(item)=>{
    navigation.navigate("Search",item)
    // navigation.navigate("Search")
 
}
const [model,setModel]=useState(false);

  const navigate=()=>{
    setModel(true)
  }

   
      

  return (
    <View style={styles.header}>
    <View style={styles.colum}>

    
    <View style={{flexDirection:"row"}}>

<View style={styles.arrowback}>

    <MaterialIcons name='menu' 
    style={{fontSize:22,alignSelf:"center",color:COLOUR.white}}
    onPress={() => {navigation.navigate("UserDrawerComp")}}/>
    </View>
    <View style={styles.Search}>

  <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>Allergy Counselor System</Text>
    </View>
  
  </View>
    </View>

<View style={{justifyContent:"center",alignItems:"center"}}>
<Text style={{marginTop:wp("2")}}>────────────   Allergies   ────────────</Text>
   <View style={{flexDirection:"row"}}>

   <Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInRightBig">
    <TouchableOpacity  onPress={()=>{navigation.navigate("Addproduct")}}>
    <View style={styles.card}>
  
      
  <Image resizeMode={'cover'} style={{height:wp("30"),marginBottom:wp("2"),width:wp("40"), 
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,}}
  source={require('../Image/Search.jpg')}/> 
  
  <MaterialCommunityIcons 
  style={{position:"absolute",fontSize:50,width:wp("15"),height:hp("12"),color:COLOUR.white}} 
  name={'qrcode-scan'}/>
 <Text style={{fontSize:15,fontWeight:"bold",marginBottom:wp("2"),color:COLOUR.white,}}> 
   Barcode</Text>

    </View>
</TouchableOpacity> 
</Animatable.View>

<Animatable.View style={{justifyContent:"center",alignItems:"center"}}
    animation="fadeInRightBig">
<TouchableOpacity  onPress={()=>{navigation.navigate("Search")}}>
    <View style={styles.card}>
  
      
  <Image resizeMode={'cover'} style={{height:wp("30"),marginBottom:wp("2"),width:wp("40"), 
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,}}
  source={require('../Image/Search.jpg')}/> 
  
  <Octicons
  style={{position:"absolute",fontSize:50,width:wp("13"),height:hp("12"),color:COLOUR.white}} 
  name={'search'}/>
 <Text style={{fontSize:15,fontWeight:"bold",marginBottom:wp("2"),color:COLOUR.white,}}> 
 Search</Text>

    </View>
</TouchableOpacity> 
</Animatable.View>
</View>
{/* render() 
 <View style={{flex: 1}}>
        <OffCanvas3D
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Menu 1',
            icon: <Icon name="camera" size={35} color='#ffffff' />,
            renderScene: <MyScene/>
          },
          {
            title: 'Menu 2',
            icon: <Icon name="bell" size={35} color='#ffffff' />,
            renderScene: <AnotherScene/>
          }
        ]}/>
      </View> 
    */}
    
</View>  
<View style={{alignItems:"center",marginTop:wp("7")}}>

    <View  style={{flexDirection:"row"}}>
{/* <Allergiescard img={item.img} Colors={item.Color} fontWeight={true} shorttexts={item.name}/> */}
   <View style={{alignSelf:"center"}}>
   
   {model && <Animatable.View  style={styles.Eggcards} animation={'zoomInUp'} > 


    <Entypo name='cross'  onPress={()=>setModel(false)} style={{fontSize:hp("5"),alignSelf:("flex-end")}}/>
      

    <View style={styles.Eggcardss}>
      <ScrollView>
  <Text>Food labels are required by law to carry essential information so that people know what is in the food they buy.

This includes statements about the presence of food allergens, which are foods known to cause a life-threatening reaction (including anaphylaxis) in people with allergies.

People with allergies are at serious risk unless foods are labelled correctly.

The role of the Food Safety Unit at the Department of Health and Human Services is to ensure that food sold in Victoria is safe.

Food labels can help consumers with food allergies avoid foods or ingredients that they or their families are allergic to.

This is because a federal law, the Food Allergen Labeling and Consumer Protection Act of 2004,  requires that the labels of most packaged foods marketed in the U.S. disclose—in simple-to-understand terms—when they are made with a “major food allergen.”

Eight foods, and ingredients containing their proteins, are defined as major food allergens. These foods account for the large majority of severe food allergic reactions:

milk
egg
fish, such as bass, flounder, or cod
crustacean shellfish, such as crab, lobster, or shrimp
tree nuts, such as almonds, pecans, or walnuts
wheat
peanuts
soybeans
The law requires that food labels identify the food source of all major food allergens used to make the food. This requirement is met if the common or usual name of an ingredient already identifies that allergen's food source name (for example, buttermilk). Otherwise, the allergen's food source must be declared at least once on the food label in one of two ways.

The name of the food source of a major allergen must appear:

In parentheses following the name of the ingredient.

Examples: "lecithin (soy)," "flour (wheat)," and "whey (milk)

The majority of food allergies. Food allergy symptoms range from mild and comfortable to life-threatening anaphylaxis.
If you think this application not useful, we are recommended to you .you have to go healthcare center and  tested all  
</Text>
</ScrollView>

</View>
   
   
    </Animatable.View>}
      </View>
<LongCards navigates={navigate}/>
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
<Text style={{marginTop:wp("3")}}>──────────── Info Allergies ────────────</Text>

<FlatList
    data={Data}
    scrollEnabled={true} 
    nestedScrollEnabled={true}
   numColumns={4}
   renderItem={({item,index})=> 
    <Shortcards  
    index={index} navigate={()=>navigate_info_alergi(item)} Colors={item.Color} Data={item} />}/>
       

</View>

</View>



    </View>

    
    
  )
  }

export default Category

const styles = StyleSheet.create({
    
    header:{
      backgroundColor:"white"
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
    menu:{
        width:wp("12"),
        // backgroundColor:"blue",
        // marginLeft:wp("15")
       
    },
    card:{
        height:hp("18"),
        width:wp("40"),
        marginTop:wp("3"),
        borderRadius:20,
        // borderWidth:1,
        // alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        margin:5,
         backgroundColor:COLOUR.Darkgreen,
        // backgroundColor:"blue"

    },Eggcards:{
      height:hp("80"),
      width:wp("85"),
      //  marginBottom:hp("5"),
      borderRadius:20,
      
      // padding:10,
      backgroundColor:COLOUR.Darkgreen,
      zIndex:1,
      center:wp("10"),
      // top:1,
  bottom:hp("-40"),
      position:"absolute"
    
    },
    Eggcardss:{
      height:hp("70"),
      width:wp("80"),
      alignSelf:"center",
      padding:15,
      
    }
  
})