import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLOR } from '../../contants/Themes.js'
import UIBtnPrimary from '../../components/UIBtnPrimary'
const windowWIdth = Dimensions.get('window').width;
const windowHeigh = Dimensions.get('window').height
import { SelectCountry } from 'react-native-element-dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty, isValidPhone } from '../../components/Isvalidation'
import PhoneInput from 'react-native-phone-number-input';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

  const [errorPass1, setErrorPass1] = useState('')
  const [errorPass2, setErrorPass2] = useState('')

  const [validatePass1, setValidatePass1] = useState('')
  const [validatePass2, setValidatePass2] = useState('')
  const isValidationOK = () => isValidEmpty(validatePass1) == true && isValidEmpty(validatePass2) == true

  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const bothValidate = () => {
    if (validatePass1 == false && validatePass2 == false) {
      setValidatePass3(false)
    } else {
      setValidatePass3(true)
    }
  }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{
          padding: 15,
          backgroundColor: 'white',
          height: windowHeigh - 90
        }}>
        <View
          style={{
            height: '100%',
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
              marginBottom: 60
            }}>
            Edit Profile
          </Text>
          <View style={[styles.checkBox,{justifyContent:'flex-start'}]}>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                size={20}
                unfillColor="#FFFFFF"
                isChecked={true}
                fillColor='#f7941e'
                style={{ borderRadius: 0 }} />
              <Text style={styles.textNormal}>
                Male
              </Text>
            </View>
            <View style={[styles.checkBox,{marginLeft:50}]}>
              <BouncyCheckbox
                size={20}
                unfillColor="#FFFFFF"
                isChecked={false}
               
                fillColor='#f7941e'
                style={{ borderRadius: 0 }} />
              <Text style={styles.textNormal}>
                Female
              </Text>
            </View>
          </View>

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
                  setErrorPass1('Please fill the field');
                } else {
                  setErrorPass1('');
                }
              }} />




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
              placeholderTextColor="#AC8E71"

              withShadow
              autoFocus
              containerStyle={styles.phoneNumberView}
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
            <Text style={{ color: 'red' }}>{errorPass2}</Text>

          </View>

          <TextInput
            style={{
              height: 48,
              backgroundColor: '#F3F3F3',
              width: '100%',
              paddingLeft: 30,
              marginBottom: 5,
              marginTop: 20,
            }}
            placeholder="Email"
            placeholderTextColor="#AC8E71"
            onChangeText={text => {
              setValidatePass1(text);
              if (isValidEmpty(text) == false) {
                setErrorPass1('Please fill the field');
              } else {
                setErrorPass1('');
              }
            }} />
          <TextInput
            style={{
              height: 48,
              backgroundColor: '#F3F3F3',
              width: '100%',
              paddingLeft: 30,
              marginTop: 20,
              marginBottom: 5,
            }}
            placeholder="Address"
            placeholderTextColor="#AC8E71"
            onChangeText={text => {
              setValidatePass1(text);
              if (isValidEmpty(text) == false) {
                setErrorPass1('Please fill the field');
              } else {
                setErrorPass1('');
              }
            }} />

          <View style={{ position: 'absolute', bottom: 0 }}>
            <UIBtnPrimary
              title="Update Profile "
              disable={isValidationOK() == false}
            />
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
  checkBox: {
    flexDirection: 'row',
    borderColor:'black',
    borderWidth:1
},
})

