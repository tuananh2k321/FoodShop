import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../contants/Themes.js'
import UIBtnPrimary from '../components/UIBtnPrimary'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty } from '../components/Isvalidation.js'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignCode = (props) => {
  const {navigation} = props
  const [errorCode, setErrorCode] = useState('')
  const [code, setCode] = useState('')
  const isValidationOK = () => isValidEmpty(code)
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          height: windowHeight,
          padding: 15,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'flex-start'}}>
            <Image source={require('../assets/img/IconArrow.png')} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: COLOR.primary,
              lineHeight: 28.8,
              alignSelf: 'center',
            }}>
            Sign Up
          </Text>
          <Image
            source={require('../assets/img/Sign-pass.png')}
            style={{
              width: 329.36,
              height: 340,
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
              alignSelf: 'flex-start',
            }}>
            Enter Verification Code
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 19.2,
              color: COLOR.title,
              width: 257,
              height: 57,

              alignSelf: 'flex-start',
            }}>
            We have sent SMS to: 046 XXX XX XX
          </Text>

          <OTPInputView
            style={{width: '80%', height: 50}}
            pinCount={5}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={{
              width: 30,
              height: 45,
              borderWidth: 0,
              borderBottomWidth: 2,
              fontSize: 20,
              fontWeight: '600',
              color: COLOR.primary,
              borderBottomColor: '#7F4E1D',
            }}
            codeInputHighlightStyle={{
              borderBottomColor: COLOR.primary,
              borderBottomWidth: 3,
            }}
            placeholderTextColor={{backgroundColor: 'red'}}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
              setCode(code)
              if (isValidEmpty(code) == false) {
                setErrorCode('Kh??ng ???????c ????? tr???ng')
              } else {
                setErrorCode('')
              }
            }}
          />
          <Text style={{color: 'red', textAlign: 'left'}}>
                {errorCode}
              </Text>

          <View style={{marginTop: 50}}>
            <UIBtnPrimary title="Sign Up" 
              onPress = {() => navigation.navigate('Login')}
              disable = {isValidationOK() == false}
              />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignCode


