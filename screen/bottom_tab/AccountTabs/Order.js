import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OnGoing from './OnGoing';
import HistoryOrder from './HistoryOrder';

const TopTab = createMaterialTopTabNavigator();

const Order = () => {
   
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image source={require('../../../assets/img/IconArrow.png')} />
                    <Text></Text>

                </View>
                <View style={styles.title}>
                    <Text style={styles.title}>Orders</Text>
                </View>


                
            </View>
        
         <TopTab.Navigator initialRouteName='A' screenOptions={{

            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'white', marginHorizontal: 50, fontWeight: 'bold', marginTop: 10 },
            tabBarItemStyle: {
                borderRadius: 10,
                borderBottomColor:'#FF5E00'
            }

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
        marginHorizontal: 32,
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