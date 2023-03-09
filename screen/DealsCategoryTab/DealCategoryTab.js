import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fruit from './Fruit';
import Vegetables from './Vegetables';
import Meat from './Meat';
import Fish from './Fish';
import { COLOR } from '../../contants/Themes';

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const TopTab = createMaterialTopTabNavigator();

const DealCategoryTab = ({navigation}) => {

    return (
      
        <SafeAreaView style={{height: windowHeight, padding: 15, backgroundColor: 'white'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/img/IconArrow.png')} />
          </TouchableOpacity>
          <View style={styles.selectContainer}>
            <Text style={styles.textCategories}> Deals Category </Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.imgSearch}
              source={require('../../assets/img/search.png')}
            />
            <TextInput style={styles.textSearch} placeholder="Search" />
          </View>
          <TopTab.Navigator
            initialRouteName="Fruit" 
            screenOptions={{
              tabBarActiveTintColor: COLOR.primary,
              tabBarInactiveTintColor: COLOR.title,
              tabBarPressColor: COLOR.primary,

              tabBarLabelStyle: {fontSize: 18, textTransform: 'capitalize', width: 100, height: 30, fontWeight: '500',},
              tabBarStyle: {
                backgroundColor: 'white',
                
                
                marginTop: 10,
                shadowColor: 0,
                width: '100%'
              },
              tabBarItemStyle: {
                borderRadius: 10,
                borderBottomColor: COLOR.primary,
              },
              tabBarIndicatorStyle: {backgroundColor: COLOR.primary},
            }}>
            <TopTab.Screen name="Fruit" component={Fruit} />
            <TopTab.Screen name="Vegetables" component={Vegetables} />
            <TopTab.Screen name="Meat" component={Meat} />
            <TopTab.Screen name="Fish" component={Fish} />
          </TopTab.Navigator>
          
         
        </SafeAreaView>
      
    );
}

export default DealCategoryTab

const styles = StyleSheet.create({
    selectContainer: {
        
        alignItems: 'center',
        
    },
    selectContainer: {
        alignItems: 'center',
    },

    textCategories: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 10,
        fontSize: 24,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
    },
    inputContainer: {
        position: 'relative',
        backgroundColor: '#F3F3F3',
        marginTop: 16,
        borderRadius: 10,
    },

    imgSearch: {
        position: 'absolute',
        top: 16, left: 10
    },

    textSearch: {
        fontSize: 16,
        paddingLeft: 27,
        padding: 10,
        height: 48,
        marginLeft: 16,
        color: '#6D3805'
    },
    container: {
        
        marginTop: 15,
        width: '100%',
        flexDirection: 'row'
        
    },
    item: {
        marginRight: 8,
        marginTop: 12,
        padding: 3,
    },

})