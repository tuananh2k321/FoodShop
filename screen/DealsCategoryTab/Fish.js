import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemDealsUri from '../../components/ItemDealsUri';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
const TopTab = createMaterialTopTabNavigator();


const Fish = ({navigation}) => {
    // const [deals, setDeals] = useState([
    //     {
    //       name: 'Anchovy',
    //       image: 'https://www.supremelobster.com/wp-content/uploads/Anchovy-1.png',
    //       weight: "1kg,priceg",
    //       price: '$ 4,99'
    //     },
    //     {
    //       name: 'Barracuda',
    //       image: 'http://www.lorpexfish.com/68-large_01oslo/great-barracuda.jpg',
    //       weight: "1kg",
    //       price: '$5,99'
    //     }, 
    //     {
    //       name: 'Betta',
    //       image: 'https://shopheo.com/wp-content/uploads/2021/12/koi-nemo-galaxy-vay-nhuyen-dep.png',
    //       weight: "1kg",
    //       price: '$ 6'
    //     },
    //     {
    //       name: 'Blue tang',
    //       image: 'https://hieutre.com/images/2021/06/ca-blue-tang-2.png',
    //       weight: "1kg,priceg",
    //       price: '$3,99'
    //     },
        
    //   ])

    const [data, setData] = useState([])

  const listFoodFish = useSelector(state => 
    state.FoodReducer.listFoodFish
  )
  const isLoading = useSelector(state => 
    state.FoodReducer.isLoading
  )

  const disPatch = useDispatch()

  useEffect(()  => {
    const getListFoodFish = async () => {
      
      // console.log("Fish ", listFoodFish)
      if (listFoodFish.result) {
        setData(listFoodFish.products)
        // console.log('useEffect')
        // console.log("Fish ", isLoading)
      }
    };

    getListFoodFish()
  }, [listFoodFish.result])


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

export default Fish

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