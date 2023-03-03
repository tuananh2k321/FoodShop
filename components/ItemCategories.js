import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import {COLOR, ICON} from '../contants/Themes'
const ItemCategories = (props) => {
    const {category} = props
    const {name, image, backGround} = category
    const {onPress} = props
  return (
    <TouchableOpacity
    onPress={onPress}
    style = {{alignItems: 'center', justifyContent: 'center', margin:10}}>
        <View style = {{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: backGround,
          justifyContent: 'center',
          alignItems: 'center'
        }}> 
          <Image source={image}/>
        </View>
        <Text style = {{
          fontSize: 15,
          lineHeight: 18,
          fontWeight: '400',
          color: COLOR.title
        }}>{name}</Text>
        
      </TouchableOpacity>
  )
}

export default ItemCategories

const styles = StyleSheet.create({})