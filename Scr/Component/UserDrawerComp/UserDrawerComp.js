import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import {Switch} from 'react-native-paper';
// import {Radio, RadioGroup} from '@ui-kitten/components';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import COLOUR from '../../Colour/Colour';

const UserDrawerComp = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [checked, setChecked] = useState('first');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigateScreens = screenName => {
    navigation.goBack();
    navigation.navigate(screenName);
  };
  const [model,setModel]=useState(false);

  const navigates=()=>{
    setModel(true)
  }
  return (
    <ImageBackground
      resizeMethod="auto"
      resizeMode="contain"
      
        
      style={styles.mainView}>
      <Animatable.View


        delay={150}
        direction={'normal'}
        animation="fadeInLeft"
        style={styles.leftView}>
        <View style={{marginTop: hp('10'), marginLeft: wp('5')}}>
          <Text style={styles.topHeading}>Menu</Text>
          <View>
            <TouchableOpacity
              onPress={() => navigateScreens('AlHistory')}
              style={styles.innerView}>
              <Ionicons
                name={'person-outline'}
                size={hp('3')}
                color={color.white}
                style={{marginRight: wp('2')}}
              />
              <Text style={styles.labelStyle}>My Profile</Text>
            </TouchableOpacity>
          </View>
          <View>
           
          
            <TouchableOpacity
              onPress={() => navigateScreens('ChangePasswordScreen')}
              style={styles.innerView}>
              <Ionicons
                name="lock-closed-outline"
                size={hp('3')}
                color={color.white}
                style={{marginRight: wp('2')}}
              />
              <Text style={styles.labelStyle}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.innerView}>
            <Ionicons
              name="notifications-outline"
              size={hp('3')}
              color={color.white}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Notification</Text>
            <Switch
              color={color.Darkgreen}
              style={{marginLeft: 'auto'}}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </TouchableOpacity>
          
          

          <TouchableOpacity
            onPress={ () =>navigates()}
            style={styles.innerView}>
            <MaterialIcons
              name="event-note"
              size={hp('3')}
              color={color.white}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateScreens('PrivacyPolicy')}
            style={styles.innerView}>
            <MaterialIcons
              name="event-note"
              size={hp('3')}
              color={color.white}
              style={{marginRight: wp('2')}}
            />
            <Text style={styles.labelStyle}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigateScreens('Login')}
          style={{
            ...styles.innerView,
            position: 'absolute',
            bottom: hp('7'),
            marginLeft: wp('5'),
          }}>
          <Ionicons
            name="log-in-outline"
            size={hp('3')}
            color={color.white}
            style={{marginRight: wp('2')}}
          />
          <Text
            style={{
              fontWeight: '500',
              fontSize: hp('2'),
              color: 'white',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View delay={100} direction={'normal'} animation="fadeInRight">
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: -10,
              height: 20,
            },
            shadowOpacity: 1,
            shadowRadius: 30.0,
            elevation: 30,
          }}>
          <Image 
            source={require('../../Image/Screenshot_Menu.png')}
            style={{
              
              
              marginTop:hp("10"),
              width: wp('25'),
              height: hp('75'),
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              overflow: 'hidden',
            }}
            
          />
        </Pressable>
      </Animatable.View>
      

          {model && <Animatable.View  style={{height:hp("80"),
  width:wp("85"),
  //  marginBottom:hp("5"),
  borderRadius:20,
  
  // padding:10,
  backgroundColor:COLOUR.Darkgreen,
  zIndex:1,
  center:wp("10"),
  // top:1,
// bottom:hp("-40"),
marginLeft:hp("2"),
  position:"absolute"} }animation={'zoomInUp'} > 


<Entypo name='cross'  onPress={()=>setModel(false)} style={{fontSize:hp("5"),alignSelf:("flex-end")}}/>
  

<View style={{height:hp("70"),
  width:wp("80"),
  alignSelf:"center",
  padding:15,
  }}>
  <ScrollView>
<Text>Food labels are required by law to carry essential information so that people know what is in the food they buy.

This includes statements about the presence of food allergens, which are foods known to cause a life-threatening reaction (including anaphylaxis) in people with allergies.

People with allergies are at serious risk unless foods are labelled correctly.

The role of the Food Safety Unit at the Department of Health and Human Services is to ensure that food sold in Victoria is safe.

The law requires that food labels identify the food source of all major food allergens used to make the food. This requirement is met if the common or usual name of an ingredient already identifies that allergen's food source name (for example, buttermilk). Otherwise, the allergen's food source must be declared at least once on the food label in one of two ways.

The name of the food source of a major allergen must appear:

In parentheses following the name of the ingredient.

Examples: "lecithin (soy)," "flour (wheat)," and "whey (milk)

The majority of food allergies. Food allergy symptoms range from mild and comfortable to life-threatening anaphylaxis.
If you think this application not useful, we are recommended to you .you have to go healthcare center and  tested all  
</Text>
</ScrollView>

</View>

</Animatable.View>
}
</ImageBackground>
  );
  
};

export default UserDrawerComp
