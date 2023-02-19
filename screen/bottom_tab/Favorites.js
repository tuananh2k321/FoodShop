import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLOR} from '../../contants/Themes'
import UIBtn from '../../components/UIBtnPrimary'
const Favorites = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1, padding: 15}}>
      <TouchableOpacity>
      <Image source={require('../../assets/img/IconArrow.png')}/>
      </TouchableOpacity>
      <Text style={{
        fontSize: 24,
        fontWeight: '700',
        color: COLOR.primary,
        lineHeight: 28.8,
        alignSelf: 'center'
      }}>Favorite</Text>
      <Image source={require('../../assets/img/group.png')} style={{alignSelf: 'center'}}/>
      <Text style={{
        fontSize: 20,
        fontWeight: '700',
        color: COLOR.title,
        lineHeight: 24,
        alignSelf: 'center'
      }}>Your heart is empty </Text>
      <Text style={{
        fontSize: 16,
        fontWeight: '400',
        color: '#6D3805',
        lineHeight: 21,
        alignSelf: 'center'
      }}>Start fall in love with some good goods </Text>
      <View style={{alignItems: 'center', position: 'absolute', bottom: 10, left: '50%', right: '50%'}}>
        <UIBtn title='Start Shopping' onPress = {() => navigation.navigate('Favorites2')}/>
      </View>
    </SafeAreaView>
  )
}

export default Favorites