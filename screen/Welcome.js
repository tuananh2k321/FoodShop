import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {COLOR} from '../contants/Themes.tsx'
import UIBtnPrimary from '../components/UIBtnPrimary'
const Welcome = () => {
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
            marginBottom: 20
          }}>
               Shop online and get grocories
                delivered from stores to your home
               in as fast as 1 hour .
        </Text>

        <UIBtnPrimary title="Sign Up"/>

        <Pressable style ={{
          width: 343,
          height: 50,
          borderRadius: 30,
          justifyContent: 'center',
          marginTop: 15,
          borderWidth: 1,
          borderColor: COLOR.primary
        }}>
          
          <Text style = {{
            fontSize: 17,
            lineHeight: 22,
            textAlign: 'center',
            color: COLOR.primary
            
          }}> Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Welcome

