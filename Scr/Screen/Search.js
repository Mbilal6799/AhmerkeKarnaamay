import { StyleSheet,ScrollView,TouchableOpacity,Text, View, useEffect,Image,TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';
import Ionicons from "react-native-vector-icons/Ionicons"
import {  SearchProducts} from '../Data/Data';
import Resultproduct from '../Component/Resultproduct';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';


// import Card from '../Component/Card';

export let myArray = [];
export let MyarrayFavorite=[];
const Search = ({navigation,route}) => {
     const item =route.params
     const [dummy,setDummy]=useState(1);
    navigate_Search=(item)=>{
        navigation.navigate('Details',item.Barcode)
      
        myArray.push(item);
        
        // AsyncStorage.setItem('Searchhistory',value)
        }
        
        favoriteFunction=async(item)=>{
            console.log(28,item)
            // navigation.navigate('',item)
        //    if(item.includes(MyarrayFavorite))
            MyarrayFavorite.push(item);
            
            await AsyncStorage.setItem('Searchhistory',JSON.stringify(MyarrayFavorite))
            setDummy(dummy+1)
        }
        console.log(41,dummy)
      
        const [search, setSearch] = useState('');
        const [filteredDataSource, setFilteredDataSource] = useState(SearchProducts);
        const [masterDataSource, setMasterDataSource] = useState([]);
        const searchFilterFunction = (text) => {
         
           
              if (text) {
                
                // Inserted text is not blank
                // Filter the masterDataSource and update FilteredDataSource
                const newData = SearchProducts.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.Textname
                  ? item.Textname.toUpperCase()
                  : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
              });
              setFilteredDataSource(newData);
              
            } else {
            
              setFilteredDataSource(SearchProducts);
      
            }
          };



     
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

      <Text style={{fontSize:20,alignSelf:"center",fontWeight:"bold",color:COLOUR.white}}>Search</Text>
        </View>
      
      </View>
        
      <Text style={styles.barcode}>Barcode Product</Text>
      <View style={styles.search}>
         <View style={styles.Searchbar}>
             <MaterialIcons name={'search'} style={{fontSize:25,paddingTop:hp("1.5"),marginLeft:wp("1.5")}}/>
<TextInput onChangeText={(text)=>searchFilterFunction(text)}  placeholder='' style={{width:wp("75")}} />
 </View>
</View>
      </View>
      
      
     

  

      <View style={{marginLeft:hp("2"),justifyContent:"center",width:wp("20"),height:hp("5"),backgroundColor:COLOUR.Darkgreen,borderRadius:20,marginTop:hp("5")}}> 
 <Text style={{height:hp("3"),color:COLOUR.white,marginLeft:hp("1.5"),  width:wp("35"),alignItems:"center", fontSize:15,fontWeight:"bold",}}>Results</Text>
     </View>


     <View/>
<FlatList
    data={filteredDataSource}
    scrollEnabled={true} 
    numColumns={1}
   horizontal={false}
   extraData={filteredDataSource}
   contentContainerStyle={{paddingTop:hp("1"),paddingBottom:hp("10")}}
   renderItem={({item,index})=> 
   <Resultproduct
   
//    favoritebool={favoriteList}  
index={index}
navigate={()=>navigate_Search(item)}
favorite={()=>favoriteFunction(item)}
arrayFavorite={MyarrayFavorite}
// arrayFavorites={MyarrayFavorite}

SearchProducts={item} />}/>
   

      </View>


)
}  


export default Search

const styles = StyleSheet.create({
    
    header:{
        // height:hp("10"),
        // backgroundColor:COLOUR.Darkgreen,
        // justifyContent:"center",
        // alignContent:"center",
        // marginTop:wp("5"),
        // alignItems:"center",
       // flexDirection:"row"
    }, 
    
    colum:{
        height:hp("20"),
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
        marginTop:wp("8"),
        // marginLeft:wp("15"),

        // backgroundColor:"blue",
        // marginLeft:wp("10")
        
    },
    Search:{
        width:wp("76"),
        marginTop:wp("8"),
        // justifyContent:"center",
        // marginRight:wp("10"),      
        // backgroundColor:"yellow",
        
    },
   
    barcode:{
        height:hp("4"),
        width:wp("35"),
        textAlign:"center",
        marginTop:wp("5"),
color:COLOUR.white,
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
      marginTop:hp("2"),
     
        alignSelf:"center",
        // flexDirection:"row",
     
        // marginTop:hp("20")

        
    },
    Searchbar:{
        height:hp("7"),
        flexDirection:"row",
        width:wp("80"),
       borderRadius:10,
        backgroundColor:COLOUR.white,
    }

})
    
