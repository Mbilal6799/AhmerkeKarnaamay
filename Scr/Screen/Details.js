// import React, { useState, } from 'react';
import React, {useEffect, useRef,useState} from 'react';
import { Text,View,SafeAreaView,StyleSheet, Dimensions,TextInput, Image,TouchableOpacity, FlatList, ScrollView,} from 'react-native';
import COLOUR from '../Colour/Colour';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Barcode, images, piedata} from '../Data/Data';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import {PieChart} from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ExtraSelect from '../Component/ExtraSelect';
import Select from '../Component/Select';
import { myArray } from './Search';
const Details=({navigation,route})=>{
  // const[select,setSelect]=useState(["Peanut","Milk","Soya","Fish","Penut","Wheat","Egg","Prawn"]);
  const[selects,setSelects]=useState([]);
  const [filterData,setFilterData]= useState([])
  const [image,setImage] = useState([])
  const item=route.params 
    const [models,setModels]=useState(false);
    const [favoriteTeams, setFavoriteTeams] = useState([]);
    var S= []
const getValue =async () =>{
  S=await AsyncStorage.getItem("Checkbox")
  let g = JSON.parse(S)
  if (S != null) {
  let data = Barcode.filter(res =>res.Barcode == item)
  
  
  //myArray.push(...data)
  // console.log(32,item)
 // await AsyncStorage.setItem('Searchhistory',JSON.stringify([...data]))
  // let data = Barcode.filter(res =>res.Barcode == "0620514006130")
    setFilterData(data)
    // setFilterData(Barcode.filter(res =>res.Barcode == "9051400613"))
    setFavoriteTeams([...JSON.parse(S)])
chec(g,data)
myArray.push(...data);
// h=await AsyncStorage.getItem("Searchhistory")
//   await AsyncStorage.setItem('Searchhistory',[...h,...data])
//   a=await AsyncStorage.getItem("Searchhistory")
// console.log(35,a)
  }else{
    JSON.parse(S)
    // console.log(30,S)    
  }
}
const chec = (s,data) =>{
 const i = data[0].nameproduct.filter(function (obj) {
    return s.indexOf(obj) !== -1;
  })
  // console.log(50,i)
  if(i.length > 0){
    alert(i)
  }
}
    useEffect(getValue,[])
    const isCarousel = useRef(null);
    //component
    // const datas=[ {value:50}, {value:80}, {value:90}, {value:70} ]
    const screenWidth = Dimensions.get("window").width;
    const categories =['Nutrition','Ingredient','Data Of Exprie'];
    const [categoryIndex,setCategoryIndex]=useState();
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    
    // const  navigates=()=>{
    //   setModels(true)
    // } 
 

    const {id} = filterData
    const CategoryLists =()=>{
      // console.log(44,categoryIndex)
      // console.log(45,categories)
      // const color= categories.color ? categories.color="white":categories.color="black"
        
      return( <View style={style.categorycont}>
            {categories.map((item,index)=>(
             <TouchableOpacity
                 key={index}
                 activeOpacity={0.8}
                onPress={()=>setModels(true) || setCategoryIndex(index)}>
                <Text
                style={[style.categoryText,
                categoryIndex==index ]}> 
                    {item}
                </Text>
{/* {                console.log(50,index,categoryIndex)} */}
                </TouchableOpacity>

            )) }
        </View>
       );   
      };
     
  
    return(
        <SafeAreaView
           style={
            {
                flex :1,
                paddingHorizontal:hp("2"),
                backgroundColor:COLOUR.white,
            }
           }>
       <ScrollView>         
       <CategoryLists   />
     <View style={{flexDirection:'row',width:wp('100'),justifyContent:'space-evenly',alignSelf:'center'}}>
     {/* {favoriteTeams.map(item=>
     {
      return(
      <Text style={{color:'black'}}>{item}</Text>
      );
      })} */}
     </View>
     
{filterData.length > 0 &&
      <Carousel
      disableVirtualization={true}
        data={[filterData[0].imgf,filterData[0].imgb]}
        // data={[filterData[0].Ingredients]}
        activeSlideAlignment={'end'}
        layout={'stack'}
        layoutCardOffset={9} 
        useScrollView={true}
        firstItem={1}
        ref={isCarousel}
        contentContainerStyle={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
        style={{
          alignSelf: 'center',
        }}
        sliderWidth={wp('100')}
        itemWidth={wp('100')}
        itemHeight={hp('100')}
        renderItem={({item}) => {
          return (
            <View style={{alignSelf:"center"}}>
            <Image style={{ resizeMode: "cover",backgroundColor:COLOUR.Darkgreen,width:wp("60"),borderRadius:10,height:hp("20")}} 
           source={item}/>
          
           
  </View>
  
  
  );
  
}
}
/>
}
   
        

      <View style={style.rows}>
        {
        selects.map(res => {return <Text>{res}</Text>})
        }
      {/* <FlatList 
    // return 
    data={myArray}
    scrollEnabled={true} 
    numColumns={1}
    horizontal={false}
    inverted={true}
    contentContainerStyle={{paddingTop:hp("30"),paddingBottom:hp("1")}}  
    renderItem={({ item }) => {
        // console.log(87,item);


 
        return (
            <>
 <ExtraSelect/>

</>
   
   
   
   )
   
}

}
  />     */}

  {/* <ExtraSelect  style={{backgroundColor:"#F9BB8D",margin:10,flexDirection:"row",justifyContent:"center"}} text={'Peanut'}/>
  
  <ExtraSelect  style={{backgroundColor:COLOUR.blue,flexDirection:"row",justifyContent:"center"}}text={'Milk'}/>
  <ExtraSelect  style={{backgroundColor:"#ECCC69",margin:10,flexDirection:"row",justifyContent:"center"}}text={'Soya'}/>
  <ExtraSelect  style={{backgroundColor:"#ED978F",flexDirection:"row",justifyContent:"center"}}text={'Fish'}/>
  <ExtraSelect  style={{backgroundColor: "#F9BB8D",margin:10,flexDirection:"row",justifyContent:"center"}}text={'Penut'}/>
  <ExtraSelect  style={{backgroundColor: "#ECCC69",flexDirection:"row",justifyContent:"center"}}text={'Wheat'}/>
  <ExtraSelect  style={{backgroundColor:COLOUR.blue,margin:10,flexDirection:"row",justifyContent:"center"}}text={'Egg'}/>
  <ExtraSelect  style={{backgroundColor:"#ED978F",flexDirection:"row",justifyContent:"center"}}text={'Prawn'}/> */}
       </View>
       

       
<View style={{backgroundColor:COLOUR.Darkgreen,borderRadius:20}}>


{/* {
  Barcode.map(res => {return(<PieChart
    data={res.piedata}
    width={screenWidth}
     height={hp("30")}
    //  height={220}
    chartConfig={chartConfig}
    accessor={"population"}
    paddingLeft={hp("-1")}
    center={[5, 5]}
    absolute
  />)})
} */}

{filterData.length>0&& <PieChart
  data={filterData[0].piedata}
  width={screenWidth}
   height={hp("30")}
  //  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  paddingLeft={hp("-1")}
  center={[5, 5]}
  absolute
/>}

{/* {
  console.log(241,filterData.length > 0 && filterData)
} */}
</View>

<TouchableOpacity onPress={() => navigation.navigate('Navigation')}>

<View style={style.Button}>
<Text style={style.SignUp}>Submit</Text>
        </View>
        </TouchableOpacity>
      

     
     </ScrollView>
    
     {models && <Animatable.View  style={{...style.Eggcards,backgroundColor:COLOUR.Darkgreen}}  animation={'fadeInDown'} > 


<Entypo name='cross'  onPress={()=>setModels(false)} style={{fontSize:hp("5"),alignSelf:"flex-start"}}/>


{categoryIndex==0 && <View style={style.Eggcardss}>
{/* <  Text>Binding methods helps ensure that the {'\n'}second snippet works the same way as the{'\n'} first one.


 {'\n'} For example,{'\n'} passes this.handleClick so you want{'\n'} to bind it. However,{'\n'} it is unnecessary to bind {'\n'}the render method or the lifecycle methods:{'\n'} we don’t pass them to other components.

 {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
 {'\n'}This post by Yehuda Katz explains  
 {'\n'}This post by Yehuda Katz explains{'\n'} what binding is, and how functions work in JavaScript, in detail.
 {'\n'}This post by Yehuda Katz explains  
 
 </Text> */}
 <Image  style={{ resizeMode: "cover",width:wp("60"),height:hp("68"),alignSelf:"center"}}    
        source={filterData[0].Nutrition}/>


 
 </View>
} 
{categoryIndex==1 && <View style={style.Eggcardss}>
<Image  style={{ resizeMode: "cover",width:wp("80"),height:hp("50")}}    
        source={filterData[0].Ingredients}/>


 
 </View>
}
{categoryIndex==2 && <View style={style.Eggcardss}>
<Image  style={{ resizeMode: "contain",width:wp("80"),height:hp("50")}}    
        source={filterData[0].Dateofexprie}/>


 
 </View>
}
</Animatable.View>} 

        </SafeAreaView>
    );

};


const style =StyleSheet.create({
    searchContainer:{
         height:hp("7"),
         backgroundColor:"white",
        borderWidth:3,
        borderColor:"white",
        opacity: 0.5,
         borderRadius:10,
         flex:1,
         flexDirection:"row",
         alignItems:"center",


    },
    input:{
        fontSize:18,
        fontWeight:'bold',   
        flex:1,
    },
   
    categorycont:{
        flexDirection:"row",
        marginBottom:wp("5"),
        justifyContent:'space-between',
    },
    categoryText:{
        fontSize:16, 
        marginTop:hp("3"),  
        color:"gray",
        fontWeight:"bold"
      },
       

    categoryTextSelected:{
            color:COLOUR.button,
            
            paddingBottom:5,
            borderBottomWidth:2,
            borderColour:COLOUR.green,
        
    },
    Eggcards:{
        height:hp("80"),
        width:wp("90"),
        marginTop:hp("1"),
        borderRadius:20,
        justifyContent:"center",
        backgroundColor:COLOUR.green,
        zIndex:1,
      left:wp("5"),
        position:"absolute"
      
      },
      Eggcardss:{
        height:hp("70"),
        width:wp("80"),
        alignSelf:"center",
       
        
      },
      // Eggcardss1:{
      //   height:hp("60"),
      //   width:wp("70"),
      //   marginTop:hp("1"),
      //   borderRadius:20,
      //   justifyContent:"center",
       
      //   zIndex:1,
      // left:wp("5"),
      //   position:"absolute",
            
      // },
      // Eggcardss2:{
      //   color:COLOUR.button,
            
      //      paddingBottom:5,
      //            borderBottomWidth:2,
      //            borderColour:COLOUR.white,
            
      // },
      // Eggcardss3:{
      //   color:COLOUR.button,
            
      //   paddingBottom:5,
      //        borderBottomWidth:2,
      //        borderColour:COLOUR.white,
        

      // },
      rows:{
        height:hp("10"),
        width:wp("20"),
   
 
    alignSelf:"center",
    
      },
      gauge: {
        position: 'absolute',
        width: 140,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
      },
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
        marginTop:wp("10"),
        borderRadius:15,
        justifyContent:"center",
        marginBottom:hp("5"),
        alignItems:"center",
        alignSelf:"center"
    }
})
export default Details;



