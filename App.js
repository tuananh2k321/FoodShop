import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
import SignCode from './screen/SignCode'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Redux.store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Signpass" component={Signpass} />
          <Stack.Screen name="SignCode" component={SignCode} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>







  )
}

export default App


