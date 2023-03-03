import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'
import { NativeScreenContainer } from 'react-native-screens'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Ongoing from './Ongoing';
import History from './History';
  

const tab = createMaterialTopTabNavigator();
const Oders = () => {
  return (
    
    <NavigationContainer> 
     <Image style = {odersheet.pnev}
       source = {require('../../assets/img/prnev.png')}
     />
     <Text style = {odersheet.title}>Orders</Text>
   <tab.Navigator>
    <tab.Screen name='Ongoing' component={Ongoing}/>
    <tab.Screen name='History'component={History}/>
   </tab.Navigator>
   </NavigationContainer>
  )
}

export default Oders
const odersheet = StyleSheet.create({
  title:{
  fontSize: 24,
  lineHeight: 29, 
  fontWeight:'700',
  color : '#FF5E00',
  marginTop: 5,
  textAlign: 'center'


  },
pnev:{

 width: 8.49,
 height: 14,
 marginLeft: 20,
 color: '#FF5E00',
 marginTop: 10
}
})