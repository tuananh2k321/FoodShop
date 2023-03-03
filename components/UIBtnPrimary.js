import { View, Text, Pressable, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import {COLOR} from '../contants/Themes.js'
const windowWIdth = Dimensions.get('window').width;

const UIBtnPrimary = (props) => {
    const {title, onPress} = props
  return (
    <TouchableOpacity style ={{
        width: windowWIdth-30,
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