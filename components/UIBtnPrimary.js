import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLOR} from '../contants/Themes.tsx'

const UIBtnPrimary = (props) => {
    const {title, onPress} = props
  return (
    <TouchableOpacity style ={{
        width: 343,
        height: 50,
        borderRadius: 30,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
      }}
      onPress={onPress}>
        
        <Text style = {{
          fontSize: 17,
          lineHeight: 22,
          textAlign: 'center',
          color: "white",
          fontWeight: '700'
          
        }}> {title}</Text>
      </TouchableOpacity>
  )
}

export default UIBtnPrimary