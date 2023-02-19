import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';

const ItemFavorites = (props) => {
    const {favorites} = props
    const {name, weight, price, image} = favorites
  return (
    <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          height: 80,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          shadowColor: '#C4C4C4',
            shadowOffset: {width: 0, height: 6},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style = {{width: 70, resizeMode: 'stretch'}}/>

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

            <TouchableOpacity>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon/icons8-shopping-cart-50.png')}
                  style={{width: 20, height: 20, tintColor: COLOR.primary}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 16.8,
                    color: COLOR.primary,
                    marginLeft: 5,
                  }}>
                  Add to cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 21.6,
              color: COLOR.title,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            {price}
          </Text>
          
        </View>
      </View>
  )
}

export default ItemFavorites

const styles = StyleSheet.create({})