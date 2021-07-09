import React from 'react';
import { View, Text, StyleSheet,Dimensions} from "react-native";
import {Style} from '../style/style'
import LottieView from 'lottie-react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default ()=>{
const screenWidth=Dimensions.get('screen').width;
  
    return <View style={Style.splashmainBox}>
       <LottieView
        autoPlay={true}
        loop={true}         
         source={require('../animations/cat.json')}
        style={{width:screenWidth/1.2}}
         />
         <Text style={{fontSize:55,fontFamily:'PB',color:'white',marginTop:RFPercentage(-5)}}>Petado</Text>
    </View>
}

