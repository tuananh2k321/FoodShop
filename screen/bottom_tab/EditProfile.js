import { SafeAreaView, StyleSheet, Text, View, Image, Platform, ToastAndroid, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native'
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
import DateTimePicker from '@react-native-community/datetimepicker';
import AxiosInstance from '../../contants/AxiosIntance.js';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const SignUp = (props) => {
  const [dob, setdob] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const { navigation } = props
  const [avatar, setAvatar] = useState(null)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [address, setAddress] = useState('')
  const [gender, setGender] = useState(true);
  const [role, setRole] = useState('');
  const phoneInput = useRef(null);

  const [errorPass1, setErrorPass1] = useState('')
  const [errorPass2, setErrorPass2] = useState('')

  const [validatePass1, setValidatePass1] = useState('')
  const [validatePass2, setValidatePass2] = useState('')
  const isValidationOK = () => isValidEmpty(validatePass1) == true && isValidEmpty(validatePass2) == true



  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateSelection = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setdob(formatDate(selectedDate));
    }
  };

  const showDatepickerDialog = () => {
    setShowDatePicker(true);
  };
  const bothValidate = () => {
    if (validatePass1 == false && validatePass2 == false) {
      setValidatePass3(false)
    } else {
      setValidatePass3(true)
    }
  }
  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức lấy ảnh",
      [
        {
          text: "Chụp ảnh ",
          onPress: () => {
            capture()
          },
        },

        {
          text: "Tải ảnh lên",
          onPress: () => {
            getImageLibrary()
          },
        },
        {
          text: "Hủy",
        },
      ]
    );
  };
  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    console.log(response.link);
    if (response.result == true) {
      setAvatar(response.link);
      ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    }
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    console.log(response.link);
    if (response.result == true) {
      setAvatar(response.link);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }
  const updateProfile = async () => {
    let rawNumber = phoneNumber.substring(3)
    console.log("----------------->", avatar, dob, name, phoneNumber, email, address)
    console.log(rawNumber)
    try {
      const response = await AxiosInstance().put('user/api/update',
        {
          phoneNumber: rawNumber, password: password, name: name,
          email: email, address: address, gender: gender, dob: dob, avatar: avatar, role: role
        })
      console.log(response)
      if (response.result) {
        ToastAndroid.show("Update Success", ToastAndroid.SHORT, ToastAndroid.CENTER);
      } else {
        ToastAndroid.show("Update Failed", ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } catch (error) {
      ToastAndroid.show("Update ERROR SYS", ToastAndroid.SHORT, ToastAndroid.CENTER);

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
              marginBottom: 15
            }}>
            Edit Profile
          </Text>

          <View style={[styles.itemGender, { justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }]}>
            <TouchableOpacity onPress={dialogImageChoose}>
              {
                !avatar
                  ?
                  (<Image style={styles.avatar} source={require('../../assets/img/Time_To_Shine.jpg')} />)
                  :
                  (<Image style={styles.avatar} source={{ uri: avatar }} />)
              }
            </TouchableOpacity>
            <Text style={[styles.text, { marginLeft: 1, fontWeight: 'bold', marginLeft: 35 }]}>Gender :</Text>
            <View style={[styles.checkBox, { marginLeft: 20 }]}>
              <BouncyCheckbox
                size={20}
                unfillColor="#FFFFFF"
                isChecked={true}
                fillColor='#f7941e'
                style={{ borderRadius: 0 }} />
              <Text style={[styles.text, { marginLeft: 1 }]}>
                Male
              </Text>
            </View>
            <View style={[styles.checkBox, { marginLeft: 20 }]}>
              <BouncyCheckbox
                size={20}
                unfillColor="#FFFFFF"
                isChecked={false}

                fillColor='#f7941e'
                style={{ borderRadius: 0 }} />
              <Text style={[styles.text, { marginLeft: 1 }]}>
                Female
              </Text>
            </View>
          </View>

          <View style={[styles.item, { justifyContent: 'flex-start', alignItems: 'center' }]}
          >
            <TouchableOpacity onPress={showDatepickerDialog}>
              <Image source={require('../../assets/icon/IconCalendar2.png')} />
            </TouchableOpacity>
            <Text style={styles.text}>
              {dob === null ? 'Date of birth' : dob}
            </Text>
            {showDatePicker && (
              <DateTimePicker
                value={dob ? new Date(dob) : new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleDateSelection}
              />
            )}
          </View>
          <View style={{ width: '100%', marginBottom: 10 }}>
            <TextInput
              value={name}
              style={styles.item}
              autoCapitalize={true}
              autoCorrect={false}
              placeholder="Full Name"
              placeholderTextColor="#AC8E71"
              onChangeText={(text) => {
                setName(text)
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
                setPhoneNumber(text);
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
            value={email}
            style={styles.item}
            placeholder="Email"
            placeholderTextColor="#AC8E71"
            onChangeText={text => {
              setEmail(text)
              setValidatePass1(text);

            }} />

          <TextInput
            value={address}
            style={styles.item}
            placeholder="Address"
            placeholderTextColor="#AC8E71"
            onChangeText={text => {
              setAddress(text)
              setValidatePass1(text);

            }} />

          <View style={{ position: 'absolute', bottom: 0 }}>
            <UIBtnPrimary
              onPress={() => updateProfile()}
              title="Update Profile "
            //disable={isValidationOK() == false}
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

  item: {
    height: 48,
    backgroundColor: '#F3F3F3',
    width: '100%',
    paddingLeft: 30,
    marginBottom: 5,
    marginTop: 18,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: '#AC8E71',
    marginLeft: 20,
  },
  checkBox: {
    flexDirection: 'row'
  },
  avatar: {
    borderRadius: 100,
    height: 70, width: 70,
  },
  itemGender: {
    flexDirection: 'row',

    width: '100%',

  },

})

