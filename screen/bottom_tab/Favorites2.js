import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';
import ItemFavorites from '../../components/ItemFavorites';
const Favorites2 = (props) => {
    const{navigation} = props
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
    <SafeAreaView style={{flex: 1, padding: 15}}>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Image source={require('../../assets/img/IconArrow.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          color: COLOR.primary,
          lineHeight: 28.8,
          alignSelf: 'center',
        }}>
        Favorites
      </Text>

      <SwipeListView
        data={deals}
        renderItem={({item}) => <ItemFavorites favorites = {item}/>}
        renderHiddenItem={(data, rowMap) => (
          <TouchableOpacity style={{
            height: 80,
            backgroundColor: '#A42B32',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'flex-end',

          }}>
            
              <Image
                source={require('../../assets/icon/recycle.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLOR.primary,
                  marginRight: 30,
                  tintColor: 'white',
                }}
              />
           
          </TouchableOpacity>
        )}
        rightOpenValue={-75}
      />
    </SafeAreaView>
  );
}

export default Favorites2

