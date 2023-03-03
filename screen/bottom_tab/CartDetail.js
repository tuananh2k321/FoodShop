import { View, Image, Text,FlatList, Pressable, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const CartDetail = () => {
  return (

    <ScrollView style={magosheet.container}>
      <Image
        source={require('../../assets/img/ticon.png')}
        style={magosheet.anh}
      />

      <Image
        source={require('../../assets/img/twoaplo.png')}
        style={magosheet.anh1}
      />

      <Image
        source={require('../../assets/img/omango.png')}
        style={magosheet.anh3}
      />

      <View style={magosheet.iputcontainer}>
        <Image style={magosheet.imtru}
          source={require('../../assets/img/soluong.png')}
        />
        <Image style={magosheet.favorite}
          source={require('../../assets/img/favorit.png')}
        />

      </View>

      <Pressable style={magosheet.press}>
        <Text style={magosheet.add}>Add To cart</Text>
      </Pressable>
      <Text style ={magosheet.need}>You may also need</Text>
      <ScrollView horizontal={true} style = {magosheet.scr}>
       <View style = {magosheet.item}>
        <View style= {magosheet.iputitem}>
        <Image style = {magosheet.imdau}
         source={require('../../assets/img/dau.png')}
        />
        <Text style={magosheet.textStra}>Strawberry</Text>
        <Text style = {magosheet.kg}>1kg</Text>
        <View style = {magosheet.price}>
          <Text style = {magosheet.gia}>$24.0</Text>
          <Image style ={magosheet.add}
          source = {require('../../assets/img/cong.png')}
          />
        </View>
        </View>
        </View>

        <View style = {magosheet.item}>
        <View style= {magosheet.iputitem}>
        <Image style = {magosheet.imdau}
         source={require('../../assets/img/dau.png')}
        />
        <Text style={magosheet.textStra}>Strawberry</Text>
        <Text style = {magosheet.kg}>1kg</Text>
        <View style = {magosheet.price}>
          <Text style = {magosheet.gia}>$24.0</Text>
          <Image style ={magosheet.add}
          source = {require('../../assets/img/cong.png')}
          />
        </View>
        </View>
        </View>

        <View style = {magosheet.item}>
        <View style= {magosheet.iputitem}>
        <Image style = {magosheet.imdau}
         source={require('../../assets/img/dau.png')}
        />
        <Text style={magosheet.textStra}>Strawberry</Text>
        <Text style = {magosheet.kg}>1kg</Text>
        <View style = {magosheet.price}>
          <Text style = {magosheet.gia}>$24.0</Text>
          <Image style ={magosheet.add}
          source = {require('../../assets/img/cong.png')}
          />
        </View>
        </View>
        </View>
       </ScrollView>

     
    </ScrollView>

  )
}

export default CartDetail
const magosheet = StyleSheet.create({
  scr: {
  
  },
  add:{
  
   
  },
  gia:{
    marginTop:11,
   marginLeft: 11,
   width: 55,
   height: 20,
   fontSize: 18,
   lineHeight: 22,
   fontWeight :'700',
   color: '#FF5E00'
  },
  price:{
   flexDirection: 'row',
   justifyContent : 'center',
   alignItems: 'center'
  
  },
   kg:{
    width: 64,
    height:14,
    lineHeight: 14,
    fontSize: 12,
    color: '#929292',
    marginLeft: 38,

   },
  textStra:{
   width: 85,
   height: 20,
   fontSize: 15,
   lineHeight:18,
   color: '#6D3805',
   marginLeft: 35,
   marginTop:22
  },
  imdau:{
  width : 75,
  height: 72,
  marginLeft: 41,
  
  },
  iputitem:{

  },
  item:{
  width: 150,
  height:189,
  marginLeft: 16,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  marginTop : 16
  },
  need:{
  color: ' #6D3805',
  fontWeight: '700',
  fontSize: 18,
  lineHeight : 22,
  marginTop : 101,
  marginLeft: 18

  },
  press: {
    marginTop:19,
    width: '90%',
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    marginHorizontal:1,
    marginLeft: 18
    
  },
  add: {
    textAlign: 'center',
    marginTop: 18,
    fontSize : 18,
    lineHeight: 18,
    color :'#FFFFFF'



  },
  iputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'


  },
  favorite: {
    marginTop: 10,
    marginRight: 20,
    width: 30,
    height: 30
  },
  imtru: {
    width: 286,
    height: 50,
    marginLeft: 18
  },
  anh3: {
    width: 345,
    height: 158,
    marginLeft: 14,
    marginTop: 106

  },
  anh1: {
    width: 162,
    height: 110,
    marginLeft: 106
  },
  anh: {
    width: 207,
    height: 246,
    marginLeft: 167
  },
  container: {
    flex: 1,
   
  }
})
