import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screen/Welcome'
import BottomTab from './screen/bottom_tab/BottomTab';
import Login from './screen/Login';
import NewAddress from './screen/bottom_tab/AddressTab/NewAddress';

import Test from './screen/Test'
import EditAddress from './screen/bottom_tab/AddressTab/EditAddress'

import {Provider} from 'react-redux'
import Redux from './redux/Store';
import Payment from './screen/bottom_tab/Payment/Payment';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Redux.store}>

      <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>  
    </NavigationContainer>
    </Provider>

    

  )
}

export default App


