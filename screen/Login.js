import { View, Text, TextInput, SafeAreaView, Image, Dimensions, CheckBox, Button, Pressable, Touchable, TouchableOpacity } from 'react-native'
import { StyleSheet, } from 'react-native'
import React, { useState } from 'react'

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const Login = (props) => {
  const {navigation} = props

  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [PasswordUser, setPasswordUser] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity onPress={() => {
          navigation.navigate('Welcome')
        }}>
          <Image source={require('../assets/img/IconArrow.png')} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Image style={styles.image} source={require('../assets/img/backgroundLogin.png')} />
        </View>
        <Text style={styles.text}>
          Enter your phone number and{'\n'}
          password to access your account
        </Text>

        {/* Text Input */}
        <View>
          <TextInput
            style={[styles.input,{paddingLeft:94}]}
            placeholder='Phone Number'
          />
          <TouchableOpacity style={styles.CountryFlag}>
            <View style={{ flexDirection: 'row' }}>
              <Image resizeMode='contain' source={require('../assets/img/SewdenFlag.png')}></Image>
              <Image style={{ marginLeft: 12,top:10 }} resizeMode='contain' source={require('../assets/img/MultipleFlag.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder='Password'/>
          <TouchableOpacity style={styles.visible}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible)
            }}>
            {
              getPasswordVisible ?
                <Image resizeMode='contain' source={require('../assets/img/IconEye.png')}></Image>
                :
                <Image resizeMode='contain' source={require('../assets/img/IconEye.png')}></Image>
            }
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text> </Text>

          <Text style={[styles.text, { fontSize: 14, color: '#FF5E00', paddingRight: 10 }]}>Forgote Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogin}>
            <Pressable>
              <Text style={[styles.text, { color: 'white', fontWeight: 'bold', fontSize: 20, }]}>
                Sign In
              </Text>
            </Pressable>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 13 }}>
            <Text style={[styles.text, { fontSize: 16, }]}>Don’t have an account? </Text>
            <Text style={[styles.text, { fontSize: 16, color: '#FF5E00' }]}>Sign Up</Text>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  main: {
    flex: 1,
  
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
    bottom: 13,
  },
  CountryFlag: {
    position: 'absolute',
    left: 12,
    bottom: 13,
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


})