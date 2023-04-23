import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'
import ItemDealsUri from '../../components/ItemDealsUri';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
const TopTab = createMaterialTopTabNavigator();

const Meat = ({navigation}) => {
    // const [deals, setDeals] = useState([
    //     {
    //       name: 'Turkey',
    //       image: 'https://product.hstatic.net/1000104489/product/chim_bo_cau_ab532a833bae4fcf97a0b666fd1ff0a7.jpeg',
    //       weight: "1kg,priceg",
    //       price: '$ 4,99'
    //     },
    //     {
    //       name: 'Pork',
    //       image: 'https://barefeetinthekitchen.com/wp-content/uploads/2018/10/visual-for-pork-cooking-temps.png',
    //       weight: "1kg",
    //       price: '$5,99'
    //     }, 
    //     {
    //       name: 'Beef',
    //       image: 'https://cdn.shopify.com/s/files/1/0096/3162/9359/collections/beef-image.png?v=1657175044',
    //       weight: "1kg",
    //       price: '$ 6'
    //     },
    //     {
    //       name: 'Chicken',
    //       image: 'https://fujimart.vn/image/cache/catalog/sanpham-tuoisong/thit%20uc%20ga%20nhat-502x502.png',
    //       weight: "1kg,priceg",
    //       price: '$3,99'
    //     },
        
    //   ])

    const [data, setData] = useState([])

  const listFoodMeat = useSelector(state => 
    state.FoodReducer.listFoodMeat
  )
  const isLoading = useSelector(state => 
    state.FoodReducer.isLoading
  )

  const disPatch = useDispatch()

  useEffect(()  => {
    const getListFoodMeat = async () => {
      if (listFoodMeat.result) {
        setData(listFoodMeat.products)
        // console.log('useEffect')
        // console.log("Meat ", listFoodMeat)
        // console.log("Meat ", isLoading)
      }
    };

    getListFoodMeat()
  }, [listFoodMeat.result])

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', 
        justifyContent: 'center', alignItems: 'center'}}>
        
        <View>
        <View style={styles.container}>
          <View style = {{marginRight: 20}}>
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
            <Image source={require('../../assets/img/discount-rate.png')} style = {{
                marginVertical: 15
            }}/>
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
        
      </SafeAreaView>
      </ScrollView>
    );
}

export default Meat

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