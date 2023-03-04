import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Signpass = ({navigation}) => {
    const [isPass1, setIspass1] = useState (true)
    const [isPass2, setIspass2] = useState (true)
    const [validatePass1, setValidatePass1] = useState (false) 
    const [validatePass2, setValidatePass2] = useState (false) 
    const validation = (text) => {
        if (text === '') {
            setValidatePass1(true)
            
        } else {
            setValidatePass1(false)
            
        }
    }
    const validation2 = (text) => {
        if (text === '') {
            setValidatePass2(true)
            
        } else {
            setValidatePass2(false)
           
        }
    }

    return (
        
      <ScrollView>
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
            onChangeText = {(text) => validation(text)}
          />
          <TouchableOpacity style={styles.eye} onPress = {() => setIspass1(!isPass1)}>
            <Image  source={require('../assets/img/eye.png')} />
          </TouchableOpacity>
        </View>
        {validatePass1 == true && <Text style = {{color: 'red'}}>không được để trống</Text>}
        <View style={styles.imgContainer}>
          <Image
            style={styles.lock2}
            source={require('../assets/img/iconLock.png')}
          />
          <TextInput style={styles.passw} placeholder="Confirm Password" 
          secureTextEntry={isPass2}
            onChangeText = {(text) => validation2(text)}
          />
          
          <TouchableOpacity style={styles.eye} onPress = {() => setIspass2(!isPass2)}>
            <Image  source={require('../assets/img/eye.png')} />
          </TouchableOpacity>
          
        </View>
        {validatePass2 == true && <Text style = {{color: 'red'}}>không được để trống</Text>}

        <Pressable style={styles.btnSignup}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>
      </View>
      </ScrollView>
    );
}

export default Signpass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
        justifyContent: 'center',
        
    },

    selectionContainer: {
        alignItems: 'center',
    },

    selectionText: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 10,
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