import { View, Text, Image, Switch, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import ToggleSwitch from 'toggle-switch-react-native'
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const language = [
  { label: 'English', value: '1' },
  { label: 'Tiếng Việt', value: '2' },

];
const Profile = (props) => {
  const { navigation } = props
  const goToEditProfile = () => {
    navigation.navigate("EditProfile")
  }
  const goToAcount = () =>{
    navigation.navigate("Account")
  }

  const [valueLanguge, setValueLanguge] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderLanguge = () => {
    if (valueLanguge || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>

        </Text>
      );
    }
    return null;
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToAcount}>

        <Image style={styles.prnev}
          source={require('../../assets/img/prnev.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}> Profile</Text>
      <TouchableOpacity onPress={goToEditProfile}>

        <View style={styles.profile} >
          <View style={styles.pro} > 
            <Image onPress = {() =>navigation.navigate("EditProfile")} style={styles.imuser} 
              source={require('../../assets/img/users.png')}
            />
            <Text style={styles.edit}>Edit Profile</Text>

          </View>
          <View style={styles.next}>
            <Image style={styles.imnext}
              source={require('../../assets/img/next.png')}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.profile} >
        <View style={styles.pro}>
          <Image style={styles.imuser}
            source={require('../../assets/img/password.png')}
          />
          <Text style={styles.edit}>Change Password</Text>
        </View>
        <View style={styles.next}>
          <Image style={styles.imnext}
            source={require('../../assets/img/next.png')}
          />
        </View>
      </View>

      <View style={styles.profile} >
        <View style={styles.pro}>
          <Image style={styles.imuser}
            source={require('../../assets/img/cards.png')}
          />
          <Text style={styles.edit}>My Cards</Text>
        </View>
        <View style={styles.next}>
          <Image style={styles.imnext}
            source={require('../../assets/img/next.png')}
          />
        </View>
      </View>
      <Text style={styles.appseting}>App Settings</Text>

      <View style={styles.profile} >
        <View style={styles.pro}>
          <Image style={styles.imuser}
            source={require('../../assets/img/bell.png')}
          />
          <Text style={styles.edit}>Notifications</Text>
        </View>
        <View style={styles.next1}>
          <Switch

            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            trackColor={{ false: '#804F1E', true: '#FF5E00' }}
            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.profile} >
        <View style={styles.pro}>
          <Image style={styles.imuser}
            source={require('../../assets/img/language.png')}
          />
          <Text style={styles.edit}>Language</Text>
        </View>
        <View style={styles.next}>
          <Image style={styles.imnext}
            source={require('../../assets/img/next.png')}
          />
        </View>


      </View>
      <TouchableOpacity onPress={() => { navigation.popToTop() }}>
        <View style={styles.profile} >
          <View style={styles.pro}>
            <Image style={styles.imuser}
              source={require('../../assets/img/logout.png')}
            />
            <Text style={styles.edit}>Logout</Text>
          </View>
          <View style={styles.next}>
            <Image style={styles.imnext}
            />
          </View>
        </View>
      </TouchableOpacity>


      {/* {renderLanguge()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={{ color: '#AC8E71' }}
          selectedTextStyle={{ color: '#AC8E71' }}
          inputSearchStyle={styles.inputSearchStyle}

          data={valueLanguge}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"

          placeholder={!isFocus ? 'Select your languge' : '...'}

          value={valueLanguge}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValueLanguge(item.valueLanguge);
            setIsFocus(false);
          }}
        /> */}


    </View>


  )
}

export default Profile
const styles = StyleSheet.create({
  appseting: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 32,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FF5E00',

  },
  next1: {
    marginRight: 20
  },
  pro: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  profile: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,

  },
  imuser: {
    width: 24,
    height: 24,
    resizeMode: 'stretch'
  },
  edit: {
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
    color: '#804F1E',

  },

  imnext: {
    marginLeft: -50,
    width: 6.67,
    height: 12,
    color: '#804F1E',

  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#FF5E00',
    marginTop: 5,
    textAlign: 'center'


  },
  prnev: {
    width: 8.49,
    height: 14,
    marginLeft: 16,
    color: '#FF5E00',
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white',

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