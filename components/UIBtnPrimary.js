import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {COLOR} from '../contants/Themes.tsx'

const UIBtnPrimary = (props) => {
    const {title} = props
  return (
    <Pressable style ={{
        width: 343,
        height: 50,
        borderRadius: 30,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
      }}>
        
        <Text style = {{
          fontSize: 17,
          lineHeight: 22,
          textAlign: 'center',
          color: "white"
          
        }}> {title}</Text>
      </Pressable>
  )
}

export default UIBtnPrimary