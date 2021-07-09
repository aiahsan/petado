import React from 'react';
import {View,Text,Dimensions,Image, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-paper';

import {Style} from '../style/style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { DrawerActions ,useNavigation} from '@react-navigation/native';
const ScreenWidth=Dimensions.get('screen').width;

export default ()=>{
const navigation=useNavigation();
return <View style={[Style.TopBar]}>
<View>
    <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
    <AntDesign name="menu-fold" size={24} color="#416c6e" />

    </TouchableOpacity>
    </View>
<View>
<View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontFamily:'PM',color:'#575757',lineHeight:15}}>Location</Text>
<View style={{flexDirection:'row',maxWidth:ScreenWidth,justifyContent:'space-between',width:ScreenWidth/2.5,alignItems:'center'}}>
    
    <FontAwesome5 name="map-marker-alt" size={24} color="#416c6e" />
<Text style={{color:'#416c6e',fontFamily:'PB'}}>
Karachi,
<Text style={{color:'#575757',fontFamily:'PM'}}> Pakistan</Text>    
</Text>
</View>
</View>

</View>
<View>

<Avatar.Image source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} size={ScreenWidth/8.2} style={{backgroundColor:'#416c6e'}} />

</View>

</View>


}

