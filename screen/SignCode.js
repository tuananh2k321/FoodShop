import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../contants/Themes.js'
import UIBtnPrimary from '../components/UIBtnPrimary'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty } from '../components/Isvalidation.js'
import AxiosInstance from '../contants/AxiosIntance.js'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignCode = (props) => {
  const { route, navigation } = props;


  const rawPhoneNumber = route.params.phoneNumber.substr(1, 10)
  const phoneNumber = "+84" + rawPhoneNumber;
  console.log("phoneNumber", phoneNumber)

  const [errorCode, setErrorCode] = useState('')
  const [code, setCode] = useState('')
  const isValidationOK = () => isValidEmpty(code)


  const onVerifyPhone = async () => {
    try {
      console.log("phoneNumber  Ne0330", phoneNumber)

      const response = await AxiosInstance().post("user/api/verify-phone", { phoneNumber: phoneNumber });
      console.log("response", response)
      if (response.result) {
        //setIsLoading(false);
        if (code == response.result.data.verification_code) {
          Alert.alert("Success", "Sign Up Success");
          navigation.navigate("Signpass")
        } else {
          Alert.alert("Error !", "Wrong code");
        }
      } else {
        Alert.alert("Error", "Could not sign up");
      }
    } catch (error) {
      ToastAndroid.show("Verify Failed \n Please check your code", ToastAndroid.SHORT, ToastAndroid.CENTER,);
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
            style={{ width: '80%', height: 50 }}
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
            placeholderTextColor={{ backgroundColor: 'red' }}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
              setCode(code)
              if (isValidEmpty(code) == false) {
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
            <UIBtnPrimary title="Sign Up"
              // onPress={() => navigation.navigate('Login')}
              onPress={onVerifyPhone}
              disable={isValidationOK() == false}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignCode


