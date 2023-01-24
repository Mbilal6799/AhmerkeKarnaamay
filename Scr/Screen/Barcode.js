import { StyleSheet, Text,Linking,TouchableOpacity  } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useEffect } from 'react';

const Barcode = ({navigation}) => {
// const  onSuccess = e => {
//   // console.warn(e.data,123213123)
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err)
//     );
//   };
let i=0;
const barcodeReaderHandler =({data})=>{
  console.warn("QR CODE Data:"+data)
  navigation.navigate('Details',data)
  // i++
  // if(i==0)
  // {
  // }
  // let number=parseInt(data)
  // console.log(number);
  
}
  return (

    <QRCodeScanner
    onRead={barcodeReaderHandler}
    vibrate={true}
    // onRead={(e)=>onSuccess(e)}
    // flashMode={RNCamera.Constants.FlashMode.torch.}
    topContent={
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text style={styles.centerText}>
        Go to{' '}
        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        your computer and scan the QR code.
      </Text>
      </TouchableOpacity>
    }
    bottomContent={
      <TouchableOpacity onPress={() => navigation.navigate('Details')}style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    }
  />
      
    
  )
}

export default Barcode

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    height:heightPercentageToDP('50'),
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
})