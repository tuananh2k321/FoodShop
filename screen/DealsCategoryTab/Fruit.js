import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dialog from 'react-native-dialog'
import { COLOR } from '../../contants/Themes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ItemDealsUri from '../../components/ItemDealsUri';
const TopTab = createMaterialTopTabNavigator();

const Fruit = ({navigation}) => {
  const [data, setData] = useState([])

  const listFood = useSelector(state => 
    state.FoodReducer.listFoodFruit
  )
  const isLoading = useSelector(state => 
    state.FoodReducer.isLoading
  )

  const disPatch = useDispatch()

  useEffect(()  => {
    const getListFoodFruit = async () => {
      await disPatch({ type: 'GET_LIST_FOOD' })
      if (listFood.result) {
        setData(listFood.products)
        // console.log('useEffect')
        // console.log("Fruit ", listFood)
        // console.log("Fruit ", isLoading)
      }
    };

    getListFoodFruit()
  }, [listFood.result])
  

    // const [deals, setDeals] = useState([
    //     {
    //       name: 'Red Apple',
    //       image: require('../../assets/img/tao.png'),
    //       weight: "1kg,priceg",
    //       price: '$ 4,99'
    //     },
    //     {
    //       name: 'Orginal Banana',
    //       image: require('../../assets/img/chuoi.png'),
    //       weight: "1kg",
    //       price: '$5,99'
    //     }, 
    //     {
    //       name: 'strawberry',
    //       image: require('../../assets/img/dau.png'),
    //       weight: "1kg",
    //       price: '$ 6'
    //     },
    //     {
    //       name: 'Avocado Bowl',
    //       image: require('../../assets/img/bo.png'),
    //       weight: "1kg,priceg",
    //       price: '$3,99'
    //     },
        
    //   ])

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <View>
          <View style={styles.container}>
            <View style={{marginRight: 20}}>
              {data.map(eachDeal => (
                <ItemDealsUri
                  deals={eachDeal}
                  key={eachDeal.name}
                  onPress={() => {
                    eachDeal.name;
                  }}
                />
              ))}
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/img/discount-rate.png')}
                style={{
                  marginVertical: 15,
                }}
              />
              {data.map(eachDeal => (
                <ItemDealsUri
                  deals={eachDeal}
                  key={eachDeal.name}
                  onPress={() => {
                    eachDeal.name;
                  }}
                />
              ))}
            </View>

            {/* {deals.map(eachDeal => (
            <ItemDeals
            deals={eachDeal}
              key={eachDeal.name}
              onPress={() => {
                eachDeal.name;
              }}
            />
          ))} */}
          </View>
          </View>

          

          <Dialog.Container visible={isLoading} style={{}}>
            <View
              style={{
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size={80} color={COLOR.primary}></ActivityIndicator>
            </View>
          </Dialog.Container>
          
        
     
        </SafeAreaView>
      </ScrollView>
    );
}

export default Fruit

const styles = StyleSheet.create({
    selectContainer: {
        
        alignItems: 'center',
        
    },
    selectContainer: {
        alignItems: 'center',
    },

    textCategories: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 10,
        fontSize: 24,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
    },
    inputContainer: {
        position: 'relative',
        backgroundColor: '#F3F3F3',
        marginTop: 16,
        borderRadius: 10,
    },

    imgSearch: {
        position: 'absolute',
        top: 16, left: 10
    },

    textSearch: {
        fontSize: 16,
        paddingLeft: 27,
        padding: 10,
        height: 48,
        marginLeft: 16,
        color: '#6D3805'
    },
    container: {
        
        marginTop: 15,
        width: '100%',
        flexDirection: 'row'
        
    },
    item: {
        marginRight: 8,
        marginTop: 12,
        padding: 3,
    },

})