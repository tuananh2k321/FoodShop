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
import {ICON, COLOR} from '../../contants/Themes.tsx'

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, label}) => {
            
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
            } else if (route.name === 'Account') {
              iconName = focused ? ICON.account : ICON.account;
              label = 'Account'
            }
            else if (route.name === 'Favorites') {
                iconName = focused ? ICON.favorites : ICON.favorites;
                label = 'Favorites'
            }

            // You can return any component that you like here!
            return <View style = {{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={iconName} 
                  style = {{width: 30, height:30, resizeMode: 'stretch',
                            tintColor: focused ? COLOR.primary : COLOR.iconNotFocused
                          }}/>
              <Text style = {{
                color : focused ? COLOR.primary : COLOR.iconNotFocused,
                
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
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    );
}

