import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import Chat  from '../screens/chat'
import AddPet  from '../screens/addpet'
import Fav  from '../screens/favorites'
import Profile  from '../screens/profile'
import Filter  from '../screens/filter'
const Stack = createStackNavigator();

export default ()=>{
    
    return <>
     <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="addpet" component={AddPet} />
      <Stack.Screen name="fav" component={Fav} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="filter" component={Filter} />
    </Stack.Navigator>
    </>
}