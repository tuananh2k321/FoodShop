import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLOR } from '../contants/Themes.js'
import UIBtnPrimary from '../components/UIBtnPrimary'
import { SelectCountry } from 'react-native-element-dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty, isValidPhone } from '../components/Isvalidation'
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/app'
const windowHeight = Dimensions.get('window').height
const windowWIdth = Dimensions.get('window').width;
const local_data = [
  {
    value: '1',

    image: {
      uri: 'https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png',
    },
  },
  {
    value: '2',

    image: {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/285px-Flag_of_the_United_States_%28Pantone%29.svg.png',
    },
  },
  {
    value: '3',

    image: {
      uri: 'https://toidi.net/wp-content/uploads/2021/08/Flag_of_Russia.svg_.png',
    },
  },
  {
    value: '4',

    image: {
      uri: 'https://chinese.edu.vn/wp-content/uploads/2022/01/Co-Trung-Quoc.jpg',
    },
  },
  {
    value: '5',

    image: {
      uri: 'https://duhocchd.edu.vn/files/editor/images/co1.png',
    },
  },
  {
    value: '6',

    image: {
      uri: 'https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg',
    },
  },
  {
    value: '7',

    image: {
      uri: 'https://i1-dulich.vnecdn.net/2013/10/03/mexico-flag-1380785949.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=8enbzFMTa1HlDWaopKOrxw',
    },
  },
];

const SignUp = (props) => {
  const { navigation } = props
  const [country, setCountry] = useState('1');

   // Handle login
   function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber('+84' + phoneNumber);
      setConfirm(confirmation);
    }

  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const startSignpass = () => {
    navigation.navigate('Signpass')
  }

  const [errorPass1, setErrorPass1] = useState('')
  const [errorPass2, setErrorPass2] = useState('')

  const [validatePass1, setValidatePass1] = useState('')
  const [validatePass2, setValidatePass2] = useState('')
  const isValidationOK = () => isValidEmpty(validatePass1) == true && isValidEmpty(validatePass2) == true


  const bothValidate = () => {
    if (validatePass1 == false && validatePass2 == false) {
      setValidatePass3(false)
    } else {
      setValidatePass3(true)
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
            source={require('../assets/img/img-signup1.png')}
            style={{
              width: 329.36,
              height: 320,
            }}
          />

          <View style={{ width: '100%', marginBottom: 10 }}>
            <TextInput
              style={{
                height: 48,
                backgroundColor: '#F3F3F3',
                width: '100%',
                paddingLeft: 30,
                marginBottom: 5,
              }}
              placeholder="Name Surname"
              placeholderTextColor="#AC8E71"
              onChangeText={text => {
                setValidatePass1(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass1('không được để trống');
                } else {
                  setErrorPass1('');
                }
              }}></TextInput>



            <Text style={{ color: 'red', textAlign: 'left' }}>
              {errorPass1}
            </Text>

          </View>


            <View style={{ width: '100%' }}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="VN"
                layout="first"
                withShadow
                autoFocus
                containerStyle={styles.phoneNumberView}
                placeholderTextColor="#AC8E71"

                textContainerStyle={{ paddingVertical: 0 }}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
                onChangeText={text => {
                  setValidatePass2(text);
                  if (isValidPhone(text) == false) {
                    setErrorPass2('phải đủ 10 số');
                  } else {
                    setErrorPass2('');
                  }
                }}
              />
            </View>
            <Text style={{ color: 'red' }}>{errorPass2}</Text>

 

          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: COLOR.title,
              lineHeight: 19.8,
              marginTop: 20,
              marginBottom: 40,
            }}>
            We need to verify you. We will send you a one time verification
            code.
          </Text>

          <View style={{}}>
          <UIBtnPrimary
            title="Next"
            disable={isValidationOK() == false}
            onPress={() => {
              startSignpass()
              signInWithPhoneNumber(validatePass1)
            }}
          />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: COLOR.title,
                lineHeight: 19.8,
                marginTop: 10,
                marginBottom: 10,
              }}>
              Already have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: COLOR.primary,
                  lineHeight: 19.8,
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignUp

const styles = StyleSheet.create({
  // DROPDOWN
  dropdown: {
    height: 40,
    width: 45,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 30,
    height: 30,
    alignSelf: 'center',

  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  phoneNumberView: {
    width: '100%',
    height: 50,
    backgroundColor: 'white'
  },

})

