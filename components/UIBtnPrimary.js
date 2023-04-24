import { View, Text, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../contants/Themes.js'
const windowWIdth = Dimensions.get('window').width;

const UIBtnPrimary = (props) => {
  const { title, onPress, disable } = props
  return (
    <TouchableOpacity style={{
      width: windowWIdth - 30,
      height: 50,
      borderRadius: 30,
      backgroundColor: COLOR.primary,
      justifyContent: 'center',
    }}
      onPress={onPress}
      disabled={disable}>

      <Text style={{
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: "white",
        fontWeight: '700'

      }}> {title}</Text>
    </TouchableOpacity>
  )
}

export default UIBtnPrimary