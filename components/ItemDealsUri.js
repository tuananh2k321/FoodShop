import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLOR, ICON} from '../contants/Themes'

const ItemDealsUri = (props) => {
    const {deals} = props
    const {name, weight, price, image,} = deals
    const {onPress} = props
  return (
    <TouchableOpacity onPress={() => console.log('abcd')}>
      <View
        style={{
          width: 164,
          height: 220,
          backgroundColor: 'white',
          borderRadius: 20,
          shadowColor: '#171717',
          shadowOffset: {width: -2, peak: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 13,
          paddingVertical: 15,
          marginBottom: 18
        }}>
        <View
          style={{
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={{uri : image}} style={{width: 130, height: 100, resizeMode: 'cover'}} />
        </View>
        <View
          style={{
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: COLOR.title,
              lineHeight: 18.31,
              fontWeight: '700',
              marginBottom: 5,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#929292',
              lineHeight: 14.32,
              fontWeight: '400',
              marginBottom: 5,
            }}>
            {weight}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: COLOR.primary,
              lineHeight: 24,
              fontWeight: '700',
            }}>
            {price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 29.56,
            height: 29.56,
            borderRadius: 50,
            backgroundColor: '#3AA14C',
            position: 'absolute',
            right: 5,
            bottom: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              alignSelf: 'center',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ItemDealsUri

const styles = StyleSheet.create({})