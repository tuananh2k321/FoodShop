import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'
import ItemDealsUri from '../../components/ItemDealsUri';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { COLOR } from '../../contants/Themes';
const TopTab = createMaterialTopTabNavigator();

const Vegetables = ({navigation}) => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false)
  }, 2000); 
    const [deals, setDeals] = useState([
        {
          name: 'Spinach',
          image: 'https://organiclivestockandcrops.org/wp-content/uploads/2018/09/organic-spinach.png',
          weight: "1kg,priceg",
          price: '$ 4,99'
        },
        {
          name: 'cauliflower',
          image: 'https://images.squarespace-cdn.com/content/v1/5a8212f5e9bfdff7bedd9efb/1646687068109-B8VNKL2NHEFXAUK7PXEP/Pacific+Cauliflower+naked.png',
          weight: "1kg",
          price: '$5,99'
        }, 
        {
          name: 'Cabbage',
          image: 'https://i0.wp.com/kidsgardening.org/wp-content/uploads/2019/03/cabbage.png?fit=720%2C720&ssl=1',
          weight: "1kg",
          price: '$ 6'
        },
        {
          name: 'Broccoli.',
          image: 'https://images.squarespace-cdn.com/content/v1/5a8212f5e9bfdff7bedd9efb/1633565782837-B8847PL2GWSD76LBQY64/broccoli+crowns.png',
          weight: "1kg,priceg",
          price: '$3,99'
        },
        
      ])

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', 
        justifyContent: 'center', alignItems: 'center'}}>
        
        <View>
          <View style={styles.container}>
          <View style = {{marginRight: 20
              }}>
          {deals.map(eachDeal => (
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
            {deals.map(eachDeal => (
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

export default Vegetables

const styles = StyleSheet.create({
    selectContainer: {
        justifyContent: 'center',
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