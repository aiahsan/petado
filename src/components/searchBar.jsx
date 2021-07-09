import React from 'react';
import { View, Text, StyleSheet,Dimensions,ScrollView,TextInput,TouchableOpacity} from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default ({onClick})=>{
    return <>
    <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',backgroundColor:'white',paddingTop:10,paddingBottom:10,paddingLeft:8,paddingRight:8,borderRadius:10}}>
                <AntDesign name="search1" size={18} color="#575757" />
                <TextInput style={{width:'75%',fontFamily:'PL'}} placeholderTextColor="#575757" placeholder="Search pet to adopt"/>
                <TouchableOpacity onPress={()=>onClick?onClick():null}>
                <Ionicons name="md-options" size={24} color="#575757" />
                </TouchableOpacity>
                </View>
    </>
}