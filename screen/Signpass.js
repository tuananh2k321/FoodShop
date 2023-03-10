import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isValidEmpty, isValidPass } from '../components/Isvalidation'
const windowHeight = Dimensions.get('window').height
const Signpass = ({navigation}) => {
  //HIDDEN or SHOW
    const [isPass1, setIspass1] = useState (true)
    const [isPass2, setIspass2] = useState (true)

  // VALIDATE
    const [errorPass1, setErrorPass1] = useState ('') 
    const [errorPass2, setErrorPass2] = useState ('') 

    const [validatePass1, setValidatePass1] = useState ('') 
    const [validatePass2, setValidatePass2] = useState ('')  
    
    const isValidationOK = () => isValidEmpty(validatePass1) && isValidEmpty(validatePass2)
    return (
        
      <KeyboardAwareScrollView>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style = {{alignSelf: 'flex-start'}}>
          <Image source={require('../assets/img/IconArrow.png')} />
        </TouchableOpacity>
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionText}>Sign Up</Text>
        </View>

        <View style={styles.editImg}>
          <Image
            style={styles.imgScreen3}
            source={require('../assets/img/screen.png')}
          />
        </View>

        <View>
          <Text style={styles.selectionText2}> Enter the password </Text>
        </View>

        <View>
          <Text style={styles.selectionText3}>
            For the security & safety please choose a password
          </Text>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.lock}
            source={require('../assets/img/iconLock.png')}
          />
          <TextInput style={styles.namsurname} placeholder="Password" secureTextEntry={isPass1}
            onChangeText = {(text) => {
              setValidatePass1(text)
              if (isValidPass(text) == false) {
                setErrorPass1('Mật khẩu phải lớn hơn 7 kí tự')
              } else {
                setErrorPass1('')
              }
            }}
          />
          <TouchableOpacity style={styles.eye} onPress = {() => setIspass1(!isPass1)}>
            <Image  source={require('../assets/img/eye.png')} />
          </TouchableOpacity>
        </View>
        <Text style = {{color: 'red'}}>{errorPass1}</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.lock2}
            source={require('../assets/img/iconLock.png')}
          />
          <TextInput style={styles.passw} placeholder="Confirm Password" 
          secureTextEntry={isPass2}
            onChangeText = {(text) => {
              setValidatePass2(text)
              if (isValidEmpty(text) == false) {
                setErrorPass2('không được để trống')
              } else {
                setErrorPass2('')
              }
            }}
          />
          
          <TouchableOpacity style={styles.eye} onPress = {() => setIspass2(!isPass2)}>
            <Image  source={require('../assets/img/eye.png')} />
          </TouchableOpacity>
          
        </View>
       <Text style = {{color: 'red'}}>{errorPass2}</Text>

        <TouchableOpacity style={styles.btnSignup} 
          disabled = {isValidationOK() == false}
          onPress = {() => navigation.navigate('SignCode')}
        >
          <Text style={styles.btnText}>Next</Text>
          
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
    );
}

export default Signpass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
        height: windowHeight
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