import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style = {styles.container}>
    <Image style = {styles.prnev}
      source={require('../../assets/img/prnev.png')}
    />
    <Text style = {styles.title}> Profile</Text>
    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/users.png')}
      />
      <Text style = {styles.edit}>Edit Profile</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
       source = {require('../../assets/img/next.png')}
      />
    </View>
    </View>

    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/password.png')}
      />
      <Text style = {styles.edit}>Change Password</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
       source = {require('../../assets/img/next.png')}
      />
    </View>
    </View>

    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/cards.png')}
      />
      <Text style = {styles.edit}>My Cards</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
       source = {require('../../assets/img/next.png')}
      />
    </View>
    </View>
    <Text style = {styles.appseting}>App Settings</Text>

    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/bell.png')}
      />
      <Text style = {styles.edit}>Notifications</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
       source = {require('../../assets/img/next.png')}
      />
    </View>
    </View>

    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/language.png')}
      />
      <Text style = {styles.edit}>Language</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
       source = {require('../../assets/img/next.png')}
      />
    </View>
    </View>

    <View style = {styles.profile} >
    <View style = {styles.pro}>
      <Image style = {styles.imuser}
       source={require('../../assets/img/language.png')}
      />
      <Text style = {styles.edit}>Logout</Text>
    </View>
    <View style = {styles.next}>
    <Image style = {styles.imnext}
      />
    </View>
    </View>
   
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  appseting:{
    fontSize: 22,
  marginLeft: 20,
  marginTop: 32,
  fontWeight: '700',
  lineHeight: 26 ,
  color: '#FF5E00' ,

  },
  next:{
  
  },
  pro:{
   flexDirection: 'row',
   alignItems: 'center',
   
  },
  profile:{
    marginTop: 30,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginLeft: 20
  },
  imuser:{
   width: 20,
   height: 24,
  

  },
  edit:{
  marginLeft:10,
  fontSize: 18,
  lineHeight: 22,
  fontWeight:'700', 
  color:'#804F1E',
 
  },

   imnext:{
    marginLeft: -50,
   width:6.67,
   height:12,
   color: '#804F1E',
  
   },
  title:{
    fontSize: 24,
    lineHeight: 29,
    fontWeight:'700',
    color : '#FF5E00',
    marginTop: 5,
    textAlign: 'center'
  
  
    },
  prnev:{
   width: 8.49,
 height: 14,
 
 color: '#FF5E00',
 marginTop: 10
  },
  container:{
    flex: 1,
    backgroundColor:' #E5E5E5'
  }
})