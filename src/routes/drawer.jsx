import React from 'react';
import {View,Dimensions,TouchableOpacity} from 'react-native'
import {Avatar,Title,Paragraph} from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import StackHome from './stack.jsx'
import { useNavigation } from '@react-navigation/core';
const Drawer = createDrawerNavigator();
const screenWidth=Dimensions.get('screen').width;

const DraweItem=({title,icon,route,isActive})=>{
  return <TouchableOpacity onPress={route?route:()=>null}  style={{marginTop:20,flexDirection:'row'}}>
    {icon()}
    <Title style={{color:isActive==true?'#ebf5f4':"#88b3b5",marginLeft:10,fontFamily:'PM',fontSize:16}}>{title}</Title>
  </TouchableOpacity>
}
const DrawerComp=({navigation})=>{
  return <View style={{paddingTop:45,paddingLeft:20}}>

<View style={{flexDirection:'row',alignItems:'center',height:'10%',width:'100%',}}>
  <View><Avatar.Image source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} size={screenWidth/8.2} style={{backgroundColor:'#416c6e'}} />
</View>
  <View style={{alignItems:'center',marginLeft:10}}>
    <Title style={{color:'white',fontFamily:'PM',fontSize:18}}>Ahsan Ismail</Title>
    
  </View>
</View>
<View style={{height:'80%',width:'100%',justifyContent:'center'}}>
<DraweItem route={()=>navigation.navigate('home')} title="Adoption" isActive={true} icon={()=><MaterialIcons name="pets"  size={24} color="#ebf5f4" />}/>
<DraweItem title="Food & Food" icon={()=><MaterialIcons name="food-bank" size={24} color="#88b3b5" />}/>
<DraweItem  title="Add pet" route={()=>navigation.navigate('addpet')} icon={()=><FontAwesome name="plus-circle" size={24} color="#88b3b5" />}/>
<DraweItem title="Favorites" route={()=>navigation.navigate('fav')} icon={()=><FontAwesome name="heart" size={24} color="#88b3b5" />}/>
<DraweItem route={()=>navigation.navigate('chat')} title="Chat" icon={()=><Ionicons name="md-chatbox-ellipses" size={24} color="#88b3b5" />}/>
<DraweItem title="Profile" route={()=>navigation.navigate('profile')} icon={()=><FontAwesome name="user" size={24} color="#88b3b5" />}/>

  
  </View> 
  <View style={{height:'10%',width:'100%',alignItems:'center',flexDirection:'row'}}>
  <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
    <Ionicons name="settings" size={24} color="#88b3b5" />
    <Title style={{color:"#88b3b5",marginLeft:10,fontFamily:'PM',fontSize:16}}>Settings</Title>
  </TouchableOpacity>
  <View style={{width:2,height:15,backgroundColor:'#88b3b5',marginLeft:10}}>

  </View>
  <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
    <Title style={{color:"#88b3b5",marginLeft:10,fontFamily:'PM',fontSize:16}}>Log out</Title>
  </TouchableOpacity>
</View>

 </View>
}
export default (props)=>{
    
    return <>
     <Drawer.Navigator drawerStyle={{width:screenWidth/1.1,backgroundColor:'#416c6e'}} drawerContent={DrawerComp} >
      <Drawer.Screen name="stackHome" component={StackHome} />
    </Drawer.Navigator>
    </>
}