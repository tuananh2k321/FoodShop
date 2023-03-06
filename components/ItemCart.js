import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';

const ItemCart = (props) => {
    const {cart} = props
    const {name, number, price, image} = cart
    const {onPressMinus, onPressPlus, onPress} = props
  return (
    <TouchableOpacity onPress={onPress}>
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
          <Image source={image} style={{width: 70, resizeMode: 'stretch'}} />

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

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F4F4F4',
                width: 98,
                justifyContent: 'space-between',
                borderRadius: 30,
              }}>
              <TouchableOpacity onPress={onPressMinus}>
                <Image
                  source={require('../assets/icon/icons8-minus-sign-50.png')}
                  style={{width: 35, height: 35, tintColor: COLOR.title}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 21.6,
                  color: COLOR.title,
                  marginHorizontal: 5,
                }}>
                {number}
              </Text>
              <TouchableOpacity onPress={onPressPlus}>
                <Image
                  source={require('../assets/icon/icons8-add-50.png')}
                  style={{width: 35, height: 35, tintColor: COLOR.title}}
                />
              </TouchableOpacity>
            </View>
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
    </TouchableOpacity>
  );
}

export default ItemCart

const styles = StyleSheet.create({})