import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View, Text } from 'react-native';
import Shop from './Shop';
import Cart from './Cart';
import Explore from './Explore';
import Favorites from './Favorites';
import Account from './Account';
import { ICON, COLOR } from '../../contants/Themes.tsx'

import Favorites2 from './Favorites2';
import Order from './AccountTabs/Order';
import OnGoing from './AccountTabs/OnGoing';
import HistoryOrder from './AccountTabs/HistoryOrder';
import Address from './AddressTab/Address';
import NewAddress from './AddressTab/NewAddress';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackFavorites = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Favorites2" component={Favorites2} />
    </Stack.Navigator>
  )
}
const AccountTabs = () => {
  return (
    <Stack.Navigator initialRouteName='Account' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="OnGoing" component={OnGoing} />
      <Stack.Screen name="HistoryOrder" component={HistoryOrder} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="NewAddress" component={NewAddress} />



    </Stack.Navigator>
  )
}

export default BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, label }) => {

            let iconName = focused
            if (route.name === 'Shop') {
              iconName = focused ? ICON.shop : ICON.shop
              label = 'Shop'
            } else if (route.name === 'Explore') {
              iconName = focused ? ICON.explore : ICON.explore;
              label = 'Explore'
            } else if (route.name === 'Cart') {
              iconName = focused ? ICON.cart : ICON.cart;
              label = 'Cart'
            } else if (route.name === 'AccountTabs') {
              iconName = focused ? ICON.account : ICON.account;
              label = 'Account'
            }
            else if (route.name === 'StackFavorites') {
              iconName = focused ? ICON.favorites : ICON.favorites;
              label = 'Favorites'
            }

            // You can return any component that you like here!
            return <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={iconName}
                style={{
                  width: 30, height: 30, resizeMode: 'stretch',
                  tintColor: focused ? COLOR.primary : COLOR.iconNotFocused
                }} />
              <Text style={{
                color: focused ? COLOR.primary : COLOR.iconNotFocused,

              }}>{label}</Text>
            </View>;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 66,
          },
        })}
    >
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="StackFavorites" component={StackFavorites} />
      <Tab.Screen name="AccountTabs" component={AccountTabs} />
    </Tab.Navigator>
  );
}

