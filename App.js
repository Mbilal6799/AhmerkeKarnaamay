import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Scr/Screen/Home';
import Registration from './Scr/Screen/Registration';
import Login from './Scr/Screen/Login';
import category from './Scr/Screen/category';
import Details from './Scr/Screen/Details';
import Addproduct from './Scr/Screen/Addproduct';
import Search from './Scr/Screen/Search';
import Allergies from './Scr/Screen/Allergies';
import Navigation from './Scr/Screen/Navigation';
import Form from './Scr/Screen/Form';
import Product from './Scr/Screen/Product';
import Barcode from './Scr/Screen/Barcode';
import SelectAllergy from './Scr/Screen/SelectAllergy';
import AlHistory from './Scr/Screen/AlHistory';
import FromRecommendation from './Scr/Screen/FromRecommendation';
import Allfavourite from './Scr/Screen/Allfavourite';
import UserDrawerComp from './Scr/Component/UserDrawerComp/UserDrawerComp';
import { Provider } from 'react-redux';
import { store,persistor } from './Scr/Redux/Reducer/index';
import {PersistGate} from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();

           
const App = () => {
  return (
<Provider store={store}>
<PersistGate persistor={persistor} loading={null}>
    <NavigationContainer>
         <Stack.Navigator>
          
      <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Navigation" component={Navigation} options={{headerShown:false}}/>
      <Stack.Screen name="Addproduct" component={Addproduct} options={{headerShown:false}}/>
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
      <Stack.Screen name="Allergies" component={Allergies} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      <Stack.Screen name="category" component={category} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Form" component={Form} options={{headerShown:false}}/>
      <Stack.Screen name="Product" component={Product} options={{headerShown:false}}/>
      <Stack.Screen name="Barcode" component={Barcode} options={{headerShown:false}}/>
      <Stack.Screen name="SelectAllergy" component={SelectAllergy} options={{headerShown:false}}/>
      <Stack.Screen name="AlHistory" component={AlHistory} options={{headerShown:false}}/>
      <Stack.Screen name="FromRecommendation" component={FromRecommendation} options={{headerShown:false}}/>
      <Stack.Screen name="Allfavourite" component={Allfavourite} options={{headerShown:false}}/>
      <Stack.Screen name="UserDrawerComp" component={UserDrawerComp} options={{headerShown:false}}/>
      
      
      
         </Stack.Navigator>
      
    </NavigationContainer>
    </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})