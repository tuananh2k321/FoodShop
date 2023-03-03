import { View, Text,Image } from 'react-native'
import React from 'react'

const Ongoing = () => {
  return (
    <View>
      <Image style = {{width: 327,height: 335,marginLeft: 24, marginTop: 87
      }}
       source={require('../../assets/img/imageorders.png')}
      />
  <Text style = {{fontSize:16,lineHeight: 19,marginHorizontal:32,fontWeight: '400',marginTop: 16}}>There is n ongoing order right now. You can order from home</Text>
    </View>
  )
}

export default Ongoing