import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty, isValidPass } from '../../components/Isvalidation'
import UIBtnPrimary from '../../components/UIBtnPrimary'
import { COLOR } from '../../contants/Themes'
import Dialog from 'react-native-dialog'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const NewCard = ({navigation}) => {
   
  // VALIDATE
    const [errorPass1, setErrorPass1] = useState ('') 
    const [errorPass2, setErrorPass2] = useState ('') 
    const [errorPass3, setErrorPass3] = useState ('') 

    const [validatePass1, setValidatePass1] = useState ('') 
    const [validatePass2, setValidatePass2] = useState ('')  
    const [validatePass3, setValidatePass3] = useState ('')  
    
    const isValidationOK = () => isValidEmpty(validatePass1) && isValidEmpty(validatePass2) && isValidEmpty(validatePass3)
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'flex-start'}}>
            <Image source={require('../../assets/img/IconArrow.png')} />
          </TouchableOpacity>
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionText}>New Card</Text>
          </View>

          <Text
            style={{
              color: COLOR.title,
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 21.6,
              marginBottom: 5,
            }}>
            Card number
          </Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.lock}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.namsurname}
              placeholder="xxxx xxxx xxxx xxxx"
             
              onChangeText={text => {
                setValidatePass1(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass1('không được để trống ');
                } else {
                  setErrorPass1('');
                }
              }}
            />
           
          </View>
          <Text style={{color: 'red', marginBottom: 20}}>{errorPass1}</Text>

          <Text
            style={{
              color: COLOR.title,
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 21.6,
              marginBottom: 5,
            }}>
            Expiry Date
          </Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.lock2}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.passw}
              placeholder="MM/YY"
             
              onChangeText={text => {
                setValidatePass2(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass2('Không được để trống');
                } else {
                  setErrorPass2('');
                }
              }}
            />

            
          </View>
          <Text style={{color: 'red', marginBottom: 20}}>{errorPass2}</Text>

          <Text
            style={{
              color: COLOR.title,
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 21.6,
              marginBottom: 5,
            }}>
            CCV
          </Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.lock}
              source={require('../../assets/img/iconLock.png')}
            />
            <TextInput
              style={styles.namsurname}
              placeholder="****"
              
              onChangeText={text => {
                setValidatePass3(text);
                if (isValidEmpty(text) == false) {
                  setErrorPass3('không được để trống ');
                } else {
                  setErrorPass3('');
                }
              }}
            />
            
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

            <UIBtnPrimary
              title="Add Card"
              
              disable={isValidationOK() == false}
            />

            
          </View>

         
        </View>
      </KeyboardAwareScrollView>
    );
}

export default NewCard

const styles = StyleSheet.create({
    container: {
        height: windowHeight-90,
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    selectionContainer: {
        alignItems: 'center',
        marginBottom: 30
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