import { SafeAreaView, StyleSheet, Text, View, Image, ToastAndroid, Pressable, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../contants/Themes.js'
import UIBtnPrimary from '../../components/UIBtnPrimary'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty } from '../../components/Isvalidation.js'
import AxiosInstance from '../../contants/AxiosIntance.js'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignCode = (props) => {
  const { route, navigation } = props;
  const email = route.params.email;

  const [errorCode, setErrorCode] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const isValidationOK = () => isValidEmpty(verifyCode);

  const onVerifyEmail = async () => {
    try {
      console.log("verifyCode",verifyCode)
      const response = await AxiosInstance().post("user/api/verify-email", { email: email, verifyCode: verifyCode });
      if (response.result) {
        ToastAndroid.show("Verify Success ", ToastAndroid.SHORT, ToastAndroid.CENTER,);
        route.params.callBackSetVerified();
        navigation.navigate("EditProfile", {verifiedEmail :true })
      } else {
        ToastAndroid.show("Verify Failed ! \n Please check your code", ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } catch (error) {
      ToastAndroid.show("ERROR VERIFY !!!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

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
            style={{ alignSelf: 'flex-start' }}>
            <Image source={require('../../assets/img/IconArrow.png')} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: COLOR.primary,
              lineHeight: 28.8,
              alignSelf: 'center',
            }}>
           Verification
          </Text>
          <Image
            source={require('../../assets/img/Sign-pass.png')}
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
            We have sent the verification code to: ***********@gmail.com
          </Text>

          <OTPInputView
            style={{ width: '80%', height: 50 }}
            pinCount={6}
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
            placeholderTextColor={{ backgroundColor: 'red' }}
            onCodeFilled={(verifyCode) => {
              console.log(`Code is ${verifyCode}, you are good to go!`);
              setVerifyCode(verifyCode)
              if (isValidEmpty(verifyCode) == false) {
                setErrorCode('Không được để trống')
              } else {
                setErrorCode('')
              }
            }}
          />
          <Text style={{ color: 'red', textAlign: 'left' }}>
            {errorCode}
          </Text>

          <View style={{ marginTop: 50 }}>
            <UIBtnPrimary title="Verify"
              // onPress={() => navigation.navigate('Login')}
              onPress={onVerifyEmail}
              disable={isValidationOK() == false}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignCode


