import { View, Text, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLOR, ICON} from '../../contants/Themes'
import ItemCategories from '../../components/ItemCategories'
import ItemDeals from '../../components/ItemDeals'
import {useSelector, useDispatch} from 'react-redux'
import UserReducer from '../../redux/reducer/UserReducer'
import UIBtnPrimary from '../../components/UIBtnPrimary'
import ItemDemo from '../../components/ItemDemo'
const Shop = () => {
  const list = useSelector(state => state.UserReducer.listUser)
  const disPatch = useDispatch()
  const [category, setCategory] = useState([
    {
      name: 'Fruits',
      image: require('../../assets/img/nho.png'),
      backGround: '#EDD0FF'
    },
    {
      name: 'Vegetables',
      image: require('../../assets/img/bi_ngo.png'),
      backGround: '#FFD9BA'
    },
    {
      name: 'Meat',
      image: require('../../assets/img/meat.png'),
      backGround: '#FACCCC'
    },
    {
      name: 'Fish',
      image: require('../../assets/img/fish.png'),
      backGround: '#FBC1BD'
    },
  ])
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
    <ScrollView>
      <SafeAreaView style={{flex: 1, padding: 15, backgroundColor: 'white'}}>
        {/* HEADER 1*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={ICON.visit}
            style={{
              tintColor: COLOR.primary,
              width: 30,
              height: 30,
              resizeMode: 'stretch',
            }}
          />
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              lineHeight: 28.8,
              color: COLOR.primary,
            }}>
            Lungangen
          </Text>
        </View>
        {/* SEARCH 2*/}
        <View
          style={{
            marginTop: 15,
          }}>
          <TextInput
            style={{
              width: '100%',
              height: 48,
              // backgroundColor: '#F3F3F3'
              backgroundColor: '#F3F3F3',
              borderRadius: 7,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 50,
            }}
            placeholder="Search"
            placeholderTextColor={COLOR.title}></TextInput>

          <Image
            source={ICON.explore}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 15,
              top: '20%',
              tintColor: COLOR.title,
            }}
          />
        </View>
        {/* LAYOUT 3 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 26.4,
              color: '#6D3805',
            }}>
            Categories
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 28.8,
              color: COLOR.primary,
            }}>
            See All
          </Text>
        </View>
        {/* LIST 4 */}
        <View
          style={{
            marginTop: 10,
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={category}
            renderItem={({item}) => <ItemCategories category={item} />}
            keyExtractor={eachCategory => eachCategory.name}
          />
        </View>
        {/* LAYOUT 5 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 26.4,
              color: '#6D3805',
            }}>
            Popular deals
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 28.8,
              color: COLOR.primary,
            }}>
            See All
          </Text>
        </View>
        {/* LIST 6 */}
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
              renderItem={({item}) => <ItemDeals deals={item} />}
              keyExtractor={eachDeal => eachDeal.name}
            />
          </View>
        </View>
        <UIBtnPrimary
          onPress={() => disPatch({type: 'GET_LIST_USER'})}
          title="Get List"
        />

        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={list}
            renderItem={({item}) => <ItemDemo deals={item} />}
            keyExtractor={eachDeal => eachDeal.name}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Shop