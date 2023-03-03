import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ItemDeals from '../../components/ItemDeals'

const Fruit = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/IconArrow.png')} />
        </TouchableOpacity>
        <View style={styles.selectContainer}>
          <Text style={styles.textCategories}> Fruit </Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.imgSearch}
            source={require('../../assets/img/search.png')}
          />
          <TextInput style={styles.textSearch} placeholder="Search" />
        </View>
        <View style={styles.container}>
          <View style = {{}}>
          {deals.map(eachDeal => (
            <ItemDeals
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
              <ItemDeals
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