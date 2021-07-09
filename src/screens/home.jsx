import React  from "react";
import { View, Text, StyleSheet,Dimensions,ScrollView,TextInput,TouchableOpacity,Image} from "react-native";
import {Style} from '../style/style'
import TopBar from '../components/topbar'
import { RFValue } from "react-native-responsive-fontsize";
import SearchBar from '../components/searchBar'
import CategoryBar from '../components/categoryBar';
import PetCard from '../components/petCard'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
export default ()=>{
    const navigation=useNavigation();
    const [isGrid,setisGrid]=React.useState(true);
    return <View style={Style.homemainBox}>
        <TopBar/>
        <View style={{flex:1,backgroundColor:'#f6f6f6',marginTop:30,borderTopLeftRadius:RFValue(30),borderTopRightRadius:RFValue(30)}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:RFValue(30),paddingBottom:RFValue(30),paddingLeft:RFValue(20),paddingRight:RFValue(20)}} >
            <View style={{paddingBottom:RFValue(100)}} >
            <View style={{marginTop:15,alignItems:'center',flexDirection:'row',marginBottom:10}}>
           <MaterialIcons name="pets" size={20} color="#416c6e" style={{marginRight:10}} />
           <Text style={{color:'#416c6e',fontFamily:'PB',fontSize:20}}>Adoption</Text>
            </View>
               <SearchBar onClick={()=>navigation.push("filter")}/>
                <CategoryBar/>    
                <View style={{flexDirection:'row-reverse',marginTop:10,marginBottom:10}}>
                    <TouchableOpacity onPress={()=>setisGrid(!isGrid)}><Ionicons name="grid" size={24} color="#416c6e" />
                    </TouchableOpacity>
                </View>
                <PetCard name="Jack" category="Arabian Cat" age="2 Years Old" distance="3.6 Km" image="https://furever.ca/wp-content/uploads/2020/12/a3f09388355a475fd3e5af850b0a3f94.jpg" isGrid={isGrid}/>

                    <PetCard isGrid={isGrid} name="Anaya" category="Arabian Cat" age="2 Years Old" distance="3.6 Km" image="https://s2.dmcdn.net/v/ABY7h1LUla3VkUKKg/x1080"/>
                    <PetCard name="Sam" category="Arabian Cat" age="2 Years Old" distance="3.6 Km" image="https://cdn.wallpapersafari.com/5/17/l8wtGx.jpg" isGrid={isGrid}/>
                    <PetCard name="Allen" category="Arabian Cat" age="2 Years Old" distance="3.6 Km" image="https://newscdn2.weigelbroadcasting.com/gzrcn-1601326002-175430-blog-cowgeneric.jpg" isGrid={isGrid}/>
                    <PetCard name="Anaya" category="Arabian Cat" age="2 Years Old" distance="3.6 Km" image="https://i.ytimg.com/vi/-3N6fCzgXuc/maxresdefault.jpg" isGrid={isGrid}/>
            </View>
        </ScrollView>
        </View>
    </View>
}

   