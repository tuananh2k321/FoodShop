import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OnGoing from './OnGoing';
import HistoryOrder from './HistoryOrder';
import { COLOR } from '../../../contants/Themes';
import { TabActions } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

const Order = ({navigation}) => {
   
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                {/* Header */}
                
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image source={require('../../../assets/img/IconArrow.png')} />
                        </TouchableOpacity>
                    
                    <Text></Text>

                </View>
                <View style={styles.title}>
                    <Text style={styles.title}>Orders</Text>
                </View>


                
            </View>
        
         <TopTab.Navigator initialRouteName='A' screenOptions={{

            tabBarActiveTintColor: COLOR.primary,
            tabBarInactiveTintColor: COLOR.title,
            tabBarPressColor: COLOR.primary,
            
            tabBarLabelStyle: { fontSize: 20, textTransform: 'capitalize' },
            tabBarStyle: { backgroundColor: 'white', marginHorizontal: 50, fontWeight: 'bold', marginTop: 10,shadowColor: 0 },
            tabBarItemStyle: {
                
                borderRadius: 10,
                borderBottomColor:COLOR.primary,
            },
            tabBarIndicatorStyle: {backgroundColor: COLOR.primary}
            

        }}>
            <TopTab.Screen name="OnGoing" component={OnGoing} />
            <TopTab.Screen name="History" component={HistoryOrder} />
        </TopTab.Navigator>
        </SafeAreaView>

    )
}

export default Order

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        padding: 15,
        marginTop: 14,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#FF5E00',
        fontWeight: 'bold'
    }
})