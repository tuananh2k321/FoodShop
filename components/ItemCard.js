import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';

const ItemCard = (props) => {
    const {card} = props
    const {name, number, price, image} = card
  return (
    <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          height: 80,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          shadowColor: '#171717',
          shadowOffset: {width: -2, peak: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style = {{width: 70, height:70, alignSelf:'center', resizeMode: 'stretch'}}/>

          <View style={{justifyContent: 'space-around', marginLeft: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 21.6,
                color: COLOR.title,
              }}>
              {name}
            </Text>

            
              
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 16.8,
                    color: COLOR.title,
                    
                  }}>
                  {number}
                </Text>
              
            
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/icon/IconArrowRoghtBrown.png')}
            style={{
              fontSize: 20,
              fontWeight: '400',
              lineHeight: 21.6,
              color: COLOR.title,
            }}>
            
          </Image>
          
        </View>
      </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({})