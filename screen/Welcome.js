import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import {COLOR} from '../contants/Themes.js'
import UIBtnPrimary from '../components/UIBtnPrimary'
const windowWIdth = Dimensions.get('window').width;
const Welcome = (props) => {
  const {navigation} = props
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/img/Illustration.png')}
          style={{
            width: 329.36,
            height: 362,
            marginBottom: 20
          }}
        />
        <Text
          style={{
            marginTop: 25,
            marginBottom: 10,
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 24,
            color: COLOR.title,
          }}>
          Realax and shop
        </Text>

        <Text
        
          style={{
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 19.2,
            color: COLOR.title,
            width: 257,
            height: 57,
            textAlign: 'center',
            marginBottom: 60
          }}>
               Shop online and get grocories
                delivered from stores to your home
               in as fast as 1 hour .
        </Text>

        <UIBtnPrimary title="Sign Up" onPress = {() => {
          navigation.navigate('SignUp')
        }}/>

        <Pressable style ={{
          width: windowWIdth-30,
          height: 50,
          borderRadius: 30,
          justifyContent: 'center',
          marginTop: 15,
          borderWidth: 1,
          borderColor: COLOR.primary
        }}
        onPress = {() => {
          navigation.navigate('Login')
        }}
        >
          
          <Text style = {{
            fontSize: 18,
            lineHeight: 22,
            textAlign: 'center',
            fontWeight: '500',
            color: COLOR.primary
            
          }}> Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Welcome

