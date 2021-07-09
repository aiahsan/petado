import React from 'react';
import {View,Text} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
export default ({name,image,distance,category,age,isGrid})=>{
    return  isGrid==true?<Card style={{borderRadius:10,marginTop:10}}>
    <Card.Content >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Title style={{color:'#626262',fontFamily:'PB'}}>{name}</Title>   
         <Title><Ionicons name="male" size={20} style={{color:'#416c6e',fontFamily:'PB'}}/></Title>
        </View>
        <View>
            <Paragraph style={{color:'#959595',fontFamily:'PM',marginTop:RFValue(-5)}}>
            {category}
            </Paragraph>
        </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:RFValue(-5),marginBottom:RFValue(7)}}>
      <Paragraph style={{color:'#959595',fontFamily:'PR'}}>{age}</Paragraph>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <FontAwesome5 name="map-marker-alt" size={18} style={{marginRight:7}} color="#416c6e" />
      <Paragraph style={{color:'#959595',fontFamily:'PR'}}>Distance: {distance}</Paragraph>

      </View>
      </View>
    </Card.Content>
    <Card.Cover source={{ uri: image }} />
     </Card>:<Card style={{borderRadius:10,marginTop:10}}>
     <View style={{flexDirection:'row'}}>
     <Card.Cover style={{width:'45%',borderRadius:10}} source={{ uri: image }} />
  
     <Card.Content style={{width:'55%',justifyContent:'center'}} >
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Title style={{color:'#575757',fontFamily:'PM'}}>{name}</Title>   
           <Title><Ionicons name="male" size={18} style={{color:'#416c6e',fontFamily:'PB'}}/></Title>
          </View>
        
        <View style={{marginRight:8}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Paragraph style={{fontFamily:'PM',color: '#575757'}}>{distance}</Paragraph>
        <FontAwesome5 name="map-marker-alt" size={18}  color="#416c6e" />

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Paragraph style={{fontFamily:'PM',color: '#575757'}}>{category}</Paragraph>
        <MaterialIcons name="category" size={18}  color="#416c6e" />

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        
        <Paragraph style={{fontFamily:'PM',color: '#575757'}}>{age}</Paragraph>
        <Foundation name="calendar" size={20}  color="#416c6e" />

          </View>
          
    
        </View>
        
      </Card.Content>
     
     </View>
       </Card>
}