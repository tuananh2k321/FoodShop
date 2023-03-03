import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import ItemCategories from '../../components/ItemCategories'


const Explore = ({navigation}) => {
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

    

    return (
      <SafeAreaView style={{flex: 1, padding: 15, backgroundColor: 'white'}}>
        <View style={styles.selectContainer}>
          <Text style={styles.textCategories}> Categories </Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.imgSearch}
            source={require('../../assets/img/search.png')}
          />
          <TextInput style={styles.textSearch} placeholder="Search" />
        </View>
        <View style={styles.container}>
          <FlatList
          
          numColumns={3}
            showsHorizontalScrollIndicator={false}
            vertical
            data={category}
            renderItem={({item}) => <ItemCategories category={item} 
              onPress = {() => {
                 navigation.navigate('Fruit')
                
              }}
            />}
            keyExtractor={eachCategory => eachCategory.name}
          />
        </View>
      </SafeAreaView>
    );
}

export default Explore

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
        marginTop: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    item: {
        marginRight: 8,
        marginTop: 12,
        padding: 3,
    },

})