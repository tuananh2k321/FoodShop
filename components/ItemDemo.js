import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLOR, ICON} from '../contants/Themes'

const ItemDeals = (props) => {
    const {deals} = props
    const {name, weight, price, avatar} = deals
  return (
    <TouchableOpacity>
        <View
          style={{
            width: 150,
            height: 189,
            backgroundColor: 'white',
            borderRadius: 20,
            shadowColor: '#C4C4C4',
            shadowOffset: {width: 0, height: 6},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 10,
            paddingVertical: 15,
            marginRight: 10
          }}>
          <View
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={{uri: avatar}} style={{width: 130, height: 80, resizeMode: 'cover'}} />
          </View>
          <View style={{
            paddingLeft: 10
          }}>
            <Text
              style={{
                fontSize: 15,
                color: COLOR.title,
                lineHeight: 18.31,
                fontWeight: '700',
                marginBottom: 5
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#929292',
                lineHeight: 14.32,
                fontWeight: '400',
                marginBottom: 5
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
          <TouchableOpacity style = {{
            width: 29.56,
            height: 29.56,
            borderRadius: 50,
            backgroundColor: '#3AA14C',
            position: 'absolute',
            right: 5,
            bottom: 10
          }}>
            <Text style= {{
              fontSize: 20,
              color: 'white',
              alignSelf: 'center'
            }}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  )
}

export default ItemDeals

const styles = StyleSheet.create({})