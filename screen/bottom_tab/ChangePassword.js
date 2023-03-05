import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty, isValidPass } from '../../components/Isvalidation'
import UIBtnPrimary from '../../components/UIBtnPrimary'
import { COLOR } from '../../contants/Themes'
import Dialog from 'react-native-dialog'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const ChangePassword = ({navigation}) => {
    const [visible, setVisible] = useState(false);

      const showDialog = () => {
        setVisible(true);
      };

      const handleCancel = () => {
        setVisible(false);
      };

      const handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        setVisible(false);
      };

  //HIDDEN or SHOW
    const [isPass1, setIspass1] = useState (true)
    const [isPass2, setIspass2] = useState (true)
    const [isPass3, setIspass3] = useState (true)

  // VALIDATE
    const [errorPass1, setErrorPass1] = useState ('') 
    const [errorPass2, setErrorPass2] = useState ('') 
    const [errorPass3, setErrorPass3] = useState ('') 

    const [validatePass1, setValidatePass1] = useState ('') 
    const [validatePass2, setValidatePass2] = useState ('')  
    const [validatePass3, setValidatePass3] = useState ('')  
    
    const isValidationOK = () => isValidEmpty(validatePass1) && isValidPass(validatePass2) && isValidEmpty(validatePass3)
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'flex-start'}}>
            <Image source={require('../../assets/img/IconArrow.png')} />
          </TouchableOpacity>
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionText}>ChangePassword</Text>
          </View>

          <View style={styles.imgContainer}>
            <Image
              style={styles.lock}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.namsurname}
              placeholder="Password"
              secureTextEntry={isPass1}
              onChangeText={text => {
                setValidatePass1(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass1('không được để trống ');
                } else {
                  setErrorPass1('');
                }
              }}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setIspass1(!isPass1)}>
              <Image source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'red', marginBottom: 30}}>{errorPass1}</Text>

          <View style={styles.imgContainer}>
            <Image
              style={styles.lock2}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.passw}
              placeholder="New Password"
              secureTextEntry={isPass2}
              onChangeText={text => {
                setValidatePass2(text);
                if (isValidPass(text) == false) {
                  setErrorPass2('Mật khẩu phải lớn hơn 7 kí tự');
                } else {
                  setErrorPass2('');
                }
              }}
            />

            <TouchableOpacity
              style={styles.eye}
              onPress={() => setIspass2(!isPass2)}>
              <Image source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'red'}}>{errorPass2}</Text>

          <View style={styles.imgContainer}>
            <Image
              style={styles.lock}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.namsurname}
              placeholder="Confirm Password"
              secureTextEntry={isPass3}
              onChangeText={text => {
                setValidatePass3(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass3('không được để trống ');
                } else {
                  setErrorPass3('');
                }
              }}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setIspass3(!isPass3)}>
              <Image source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'red'}}>{errorPass3}</Text>

          <View style={{position: 'absolute', bottom: 15, left: 15, right: 15}}>
            {/* <TouchableOpacity
              style={styles.btnSignup}
              disabled={isValidationOK() == false}
              //   onPress = {() => navigation.navigate('SignCode')}
            >
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity> */}

            <UIBtnPrimary title="Confirm" onPress={showDialog} disable={isValidationOK() == false}/>

            <TouchableOpacity
              style={{
                width: windowWidth - 30,
                height: 50,
                borderRadius: 30,
                justifyContent: 'center',
                marginTop: 15,
                borderWidth: 1,
                borderColor: COLOR.primary,
              }}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: 'center',
                  fontWeight: '500',
                  color: COLOR.primary,
                }}>
                {' '}
                Back To Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <Dialog.Container visible={visible}>
            <Dialog.Title>Notification</Dialog.Title>
            <Dialog.Description>
              Do you want to change this Password? You cannot undo this action.
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="Delete" onPress={handleDelete} />
          </Dialog.Container>
        </View>
      </KeyboardAwareScrollView>
    );
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        height: windowHeight-90,
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    selectionContainer: {
        alignItems: 'center',
    },

    selectionText: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 5,
        fontSize: 24,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
        alignSelf: 'center'
    },


   

   

    selectionText2: {
        fontWeight: '700',
        
        marginTop: 20,
        fontSize: 20,
        color: '#7F4E1D',
        fontFamily: 'Klarna Text',
       
    },
    selectionText3: {
        fontWeight: '400',
        letterSpacing: 0.41,
        marginTop: 12,
        
        fontSize: 16,
        color: '#7F4E1D',
        fontFamily: 'Klarna Text',
    },

    editImg: {
        alignItems: 'center',
        height: 270
    },

    imgContainer: {
        position: 'relative',
        backgroundColor: '#F3F3F3',
        marginTop: 16,
        borderRadius: 10,
        
    },
    lock: {
        position: 'absolute',
        top: 16,
        left: 23,

    },

    lock2: {
        position: 'absolute',
        top: 16,
        left: 23,
    },

    eye: {
        position: 'absolute',
        top: 16,
        right: 13,
    },

    namsurname: {
        paddingLeft: 27,
        width: 355,
        padding: 10,
        height: 48,
        marginLeft: 16,
        borderRadius: 5,
        borderColor: '#F3F3F3',
    },

    passw: {
        textAlign: 'auto',
        paddingLeft: 27,
        width: 355,
        padding: 10,
        height: 48,
        marginLeft: 16,
        borderRadius: 5,
        borderColor: 'red',
        
    },

    btnSignup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
        paddingVertical: 13,
        paddingHorizontal: 24,
        width: '100%',
        height: 50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
    },
    btnText: {
        color: '#FFFFFF',
        fontFamily: 'Klarna Text',
        fontSize: 20,
    }
})