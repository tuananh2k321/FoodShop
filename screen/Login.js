import { View, Text, TextInput, SafeAreaView, Image, Dimensions, CheckBox, Button, Pressable, Touchable, TouchableOpacity } from 'react-native'
import { StyleSheet, } from 'react-native'
import React, { useState, useRef } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SelectCountry } from 'react-native-element-dropdown'
import { isValidEmpty, isValidPhone } from '../components/Isvalidation'
import PhoneInput from 'react-native-phone-number-input';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
GoogleSignin.configure({
  webClientId: '774396199993-20t7u8gak5j7mpi19p5auil2p2a5g2n8.apps.googleusercontent.com',
});
const Login = (props) => {
  const { navigation } = props
  
  // FACEBOOK
  handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log('Login success with permissions: '
            + result.grantedPermissions.toString());
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString());
              
                // isLoggedIn: true,
                // accessToken: data
              
          })
        }
      })
  }
            
          
  // GOOGLE
  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // TODO: Lưu thông tin người dùng vào state của ứng dụng
    } catch (error) {
      console.log('signIn error:', error);
    }
  }

  const [country, setCountry] = useState('1');
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [PasswordUser, setPasswordUser] = useState('');

  const [errorPass1, setErrorPass1] = useState('')
  const [errorPass2, setErrorPass2] = useState('')

  const [validatePass1, setValidatePass1] = useState('')
  const [validatePass2, setValidatePass2] = useState('')
  const isValidationOK = () => isValidEmpty(validatePass1) == true && isValidEmpty(validatePass2) == true

  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          {/* Header */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../assets/img/IconArrow.png')} />
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.title}>Sign In</Text>
            <Image
              style={styles.image}
              source={require('../assets/img/backgroundLogin.png')}
            />
          </View>
          <Text style={styles.text}>
            Enter your phone number and{'\n'}
            password to access your account
          </Text>

          {/* Text Input */}
          <View>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="VN"
              layout="first"
              withShadow
              autoFocus
              containerStyle={styles.phoneNumberView}
              textContainerStyle={{paddingVertical: 0}}
              onChangeFormattedText={text => {
                setPhoneNumber(text);
              }}
              onChangeText={text => {
                setValidatePass1(text);
                if (isValidPhone(text) == false) {
                  setErrorPass1('phải đủ 10 số');
                } else {
                  setErrorPass1('');
                }
              }}
            />
            <Text style={{color: 'red', textAlign: 'left'}}>{errorPass1}</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              autoCapitalize={false}
              secureTextEntry={getPasswordVisible ? false : true}
              onChangeText={text => {
                setValidatePass2(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass2('không được để trống');
                } else {
                  setErrorPass2('');
                }
              }}
              placeholder="Password"
            />
            <Text style={{color: 'red', textAlign: 'left'}}>{errorPass2}</Text>
            <TouchableOpacity
              style={styles.visible}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}>
              {getPasswordVisible ? (
                <Image
                  resizeMode="contain"
                  source={require('../assets/img/IconEye.png')}></Image>
              ) : (
                <Image
                  resizeMode="contain"
                  source={require('../assets/img/IconEye.png')}></Image>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text> </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 14,
                    color: '#FF5E00',
                    paddingRight: 10,
                    fontWeight: '500',
                    marginBottom: 10,
                  },
                ]}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnLogin}
              disabled={isValidationOK() == false}
              onPress={() => navigation.navigate('BottomTab')}>
              <Text
                style={[
                  styles.text,
                  {color: 'white', fontWeight: 'bold', fontSize: 20},
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>

            {/*  GOOGLE */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
              onPress={() => {
                signIn()
                navigation.navigate('BottomTab')
              }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/icon/icons8-google-48.png')}
                />
                <Text>Sign in with google</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                handleFacebookLogin()
                // navigation.navigate('BottomTab')
              }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#171717',
                }}>
                <Image
                  source={require('../assets/icon/icons8-facebook-48.png')}
                />
                <Text>Sign in with facebook</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 13,
              }}>
              <Text style={[styles.text, {fontSize: 16}]}>
                Don’t have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.text, {fontSize: 16, color: '#FF5E00'}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default Login

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: windowHeight,
    backgroundColor: 'white'
  },
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    marginHorizontal: 17,
    // borderColor: 'black',
    // borderWidth: 2,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FF5E00',
    lineHeight: 41,
    fontWeight: 'bold'
  },
  image: {
    width: 340,
    height: 340,
    top: -50,
    marginBottom: -40

  },
  text: {
    fontSize: 18,
    color: '#6D3805',
    lineHeight: 25,
    letterSpacing: 0.41,
  },
  input: {
    marginTop: 13,
    backgroundColor: '#F3F3F3',
    width: windowWIdth - 40,
    height: 48,
    borderRadius: 5,
    marginTop: 13,
    paddingLeft: 27
  },
  visible: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  CountryFlag: {
    position: 'absolute',
    left: 12,
    bottom: 25,
  },
  btnLogin: {
    backgroundColor: '#FF5E00',
    width: windowWIdth - 40,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

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
    width: '98%',
    height: 50,
    backgroundColor: 'white'
  },


})