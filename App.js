import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screen/Welcome'
import BottomTab from './screen/bottom_tab/BottomTab';
import Login from './screen/Login';
import NewAddress from './screen/bottom_tab/AddressTab/NewAddress';
import Signpass from './screen/Signpass';
import Test from './screen/Test'
import EditAddress from './screen/bottom_tab/AddressTab/EditAddress'
import SignUp from './screen/SignUp'
import { Provider } from 'react-redux'
import Redux from './redux/Store';
import Payment from './screen/bottom_tab/Payment/Payment';
import ItemOrderHistory from './components/ItemOrderHistory';
import HistoryOrder from './screen/bottom_tab/AccountTabs/HistoryOrder';
import EditProfile from './screen/bottom_tab/EditProfile'
import SignCode from './screen/SignCode'
import Maps from './screen//bottom_tab/Maps'
const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Signpass" component={Signpass} />
      <Stack.Screen name="SignCode" component={SignCode} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <Provider store={Redux.store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StackBegin" screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="StackBegin" component={StackBegin} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="EditProfile" component={EditProfile} />


          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  )
}

export default App


