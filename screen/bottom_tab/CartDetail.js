import { View, Image, Text, FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ItemDeals from '../../components/ItemDeals'
import React, { useState } from 'react'


const CartDetail = () => {
  const [first, setfirst] = useState(0)
  const tru = () => {
    
    if (first>0) {
      setfirst(first-1)
      console.log('tru', first);
    }
  }
  const cong = () => {
    setfirst(first+1)
    console.log('cong', first);
  }
  const [deals, setDeals] = useState([
    {
      name: 'Red Apple',
      image: require('../../assets/img/tao.png'),
      weight: "1kg,priceg",
      price: '$ 4,99'
    },
    {
      name: 'Orginal Banana',
      image: require('../../assets/img/chuoi.png'),
      weight: "1kg",
      price: '$5,99'
    },
    {
      name: 'strawberry',
      image: require('../../assets/img/dau.png'),
      weight: "1kg",
      price: '$ 6'
    },
    {
      name: 'Avocado Bowl',
      image: require('../../assets/img/bo.png'),
      weight: "1kg,priceg",
      price: '$3,99'
    },

  ])
  return (
    <ScrollView style={magosheet.container}>
      <Image
        source={require('../../assets/img/prnev.png')}
        style={magosheet.prnev}
      />

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

        <View style={magosheet.soluong}>

          <TouchableOpacity style={magosheet.ipsl}
            onPress={tru}
            
          > 
            <Text
              style={magosheet.ttru}
            >-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24, top: 8, left: 135, position: 'absolute' }}>
            {first}
          </Text>

          <TouchableOpacity style={[magosheet.ipsl, { top: 5, left: 205 }]}
            onPress={cong}
              
          >

            <Text
              style={magosheet.ttru}
            >+</Text>
          </TouchableOpacity>

        </View>
        <Image style={magosheet.favorite}
          source={require('../../assets/img/favorit.png')}
        />

      </View>

      <Pressable style={magosheet.press}>
        <Text style={magosheet.add}>Add To cart</Text>
      </Pressable>
      <Text style={magosheet.need}>You may also need</Text>


      <View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}>
          <FlatList

            showsHorizontalScrollIndicator={false}
            horizontal
            data={deals}
            renderItem={({ item }) => <ItemDeals deals={item} />}
            keyExtractor={eachDeal => eachDeal.name}
          />
        </View>
      </View>
    </ScrollView>

  )
}


export default CartDetail
const magosheet = StyleSheet.create({
  ipsl: {
    backgroundColor: 'white', width: 40, height: 40,
    borderRadius: 20, top: 5, left: 5
  },
  ttru: {
    width: 40, height: 40,
    fontSize: 30, textAlign: 'center',


  },
  prnev: {
    width: 8.49,
    height: 14,
    marginLeft: 16,
    color: '#FF5E00',
    marginTop: 13
  },
  gia: {
    marginTop: 11,
    marginLeft: 11,
    width: 55,
    height: 20,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
    color: '#FF5E00'
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  kg: {
    width: 64,
    height: 14,
    lineHeight: 14,
    fontSize: 12,
    color: '#929292',
    marginLeft: 38,

  },
  textStra: {
    width: 85,
    height: 20,
    fontSize: 15,
    lineHeight: 18,
    color: '#6D3805',
    marginLeft: 35,
    marginTop: 22
  },
  imdau: {
    width: 75,
    height: 72,
    marginLeft: 41,

  },
  iputitem: {

  },
  item: {
    width: 150,
    height: 189,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 16
  },
  need: {
    color: ' #6D3805',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    marginTop: 101,
    marginLeft: 18

  },
  press: {
    marginTop: 19,
    width: '90%',
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    marginHorizontal: 1,
    marginLeft: 18

  },
  add: {
    textAlign: 'center',
    marginTop: 18,
    fontSize: 18,
    lineHeight: 18,
    color: '#FFFFFF'



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

  },
  soluong: {
    width: 290,
    height: 50,
    backgroundColor: '#C0C0C0',
    borderRadius: 30,
    flexDirection: 'row',
    position: 'relative'
  }
})
