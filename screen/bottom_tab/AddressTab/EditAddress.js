import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;


const home = [
  { label: 'Home', value: '1' },
  { label: 'HomeTown', value: '2' },
  { label: 'Homie', value: '3' },
  { label: 'Workplace', value: '4' },
  { label: 'Motel', value: '5' },

];

const city = [
  { label: 'Los Angles', value: '1' },
  { label: 'Texas', value: '2' },
  { label: 'New York', value: '3' },
  { label: 'Ha Noi', value: '4' },
  { label: 'Ho Chi Minh City', value: '5' },
  { label: 'Tokyo', value: '6' },
  { label: 'Paris', value: '7' },
  { label: 'San Fancisco', value: '8' },

]

const EditAddress = (props) => {
  const { navigation } = props;
  const [valueLocation, setValueLocation] = useState(null);
  const [valueCity, setValueCity] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const Back = () => {
    navigation.pop(1)
  }

  const renderLabel = () => {
    if (valueLocation || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>

        </Text>
      );
    }
    return null;
  };


  const renderCity = () => {
    if (valueCity || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>

        </Text>
      );
    }
    return null;
  };
  return (
    <KeyboardAwareScrollView>

    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={Back} >
            <Image source={require('../../../assets/img/IconArrow.png')} />

          </TouchableOpacity>
          <Text></Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.title}>Edit Addresses</Text>
        </View>

        {/* Input */}
        <View>

          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={{ color: '#AC8E71' }}
            selectedTextStyle={{ color: '#AC8E71' }}
            inputSearchStyle={styles.inputSearchStyle}

            data={home}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"

            placeholder={!isFocus ? 'Select your location' : '...'}
            searchPlaceholder="Search..."
            value={valueLocation}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueLocation(item.valueLocation);
              setIsFocus(false);
            }}
          />


          <TextInput
            style={[styles.input, {}]}
            placeholder='Lucas Williams'
            placeholderTextColor="#AC8E71" />



          {renderCity()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={{ color: '#AC8E71' }}
            selectedTextStyle={{ color: '#AC8E71' }}
            inputSearchStyle={styles.inputSearchStyle}

            data={city}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"

            placeholder={!isFocus ? 'City' : '...'}
            searchPlaceholder="Search..."
            value={valueCity}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueCity(item.valueCity);
              setIsFocus(false);
            }}
          />
         

          <TextInput
            style={[styles.input, {}]}
            placeholder='Lungangen 6, 41722'
            placeholderTextColor="#AC8E71" />
        </View>

        {/* BUTTON  */}
        <TouchableOpacity style={styles.btnAdd}>
          <Pressable>
            <Text style={[styles.text, { color: 'white', fontWeight: 'bold', fontSize: 20, }]}>
              Update Address
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default EditAddress


const styles = StyleSheet.create({
  main: {
    
    backgroundColor: 'white',
    height: windowHeight
  },
  container: {
    
    backgroundColor: "white",
    marginHorizontal: 16,
    height: '85%'
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 10,
    
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FF5E00",
    lineHeight: 29,

  },
  input: {
    marginTop: 13,
    backgroundColor: '#F3F3F3',
    width: windowWIdth - 40,
    height: 48,
    borderRadius: 5,
    marginTop: 30,
    paddingLeft: 27,
    color: "black"
  },
  btnAdd: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#FF5E00',
    width: windowWIdth - 40,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  dropdown: {
    height: 50,
    marginTop: 30,
    borderRadius: 5,

    paddingHorizontal: 27,
    backgroundColor: '#F3F3F3',
    width: windowWIdth - 40,
  },


})