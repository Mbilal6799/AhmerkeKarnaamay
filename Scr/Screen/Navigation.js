import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import category from './category';
import Search from './Search';
import Addproduct from './Addproduct';
import AboutMe from './AboutMe';
import History from './History';
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLOUR from '../Colour/Colour';

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#512500',
        swipeEnabled: true,
        tabBarStyle:{height:hp("7")},
        animationEnabled: true,
        tabBarActiveBackgroundColor: COLOUR.Darkgreen,
        tabBarInactiveBackgroundColor: 'white',
        
      })}>
        
      <Tab.Screen name="category" component={category} 
      
      options={{tabBarIcon: ({size}) => (
        <Feather name="home" size={hp('3')} />
      ),
      headerShown:false,
      title:"",
      tabBarLabelStyle: {
     display:"none"
      }
    }}
      /> 
      <Tab.Screen name="Search" component={Search} 
      
      options={{tabBarIcon: ({size}) => (
        <Feather name="search" size={hp('3')} />
      ),
      headerShown:false,
      title:"",
      tabBarLabelStyle: {
     display:"none"
      }
    }}
      /> 
      <Tab.Screen name="Addproduct" component={Addproduct} 
      
      options={{tabBarIcon: ({size}) => (
        <Feather name="camera" size={hp('3')} />
      ),
      headerShown:false,
      title:"",
      tabBarLabelStyle: {
     display:"none"
      }
    }}
      /> 
      <Tab.Screen name="History" component={History} 
      
      options={{tabBarIcon: ({size}) => (
        <Foundation name="address-book" size={hp('3')} />
      ),
      headerShown:false,
      title:"",
      tabBarLabelStyle: {
     display:"none"
      }
    }}
      /> 
      <Tab.Screen name="AboutMe" component={AboutMe} 
      
      options={{tabBarIcon: ({size}) => (
        <Feather name="user-plus" size={hp('3')} />
      ),
      headerShown:false,
      title:"",
      tabBarLabelStyle: {
     display:"none"
      }
    }}
      /> 


    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})