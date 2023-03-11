import { SafeAreaView, StyleSheet, Text, View,RefreshControl, Dimensions, FlatList, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import ItemCategories from '../../components/ItemCategories'
import { COLOR } from '../../contants/Themes'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Explore = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [refreshControl, setRefreshControl] = useState(false)

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
    {
      name: 'Sea food',
      image: require('../../assets/img/tom.png'),
      backGround: '#FFE299'
    },
    {
      name: 'juice',
      image: require('../../assets/img/juicce.png'),
      backGround: '#D3E5C4'
    },
    {
      name: 'Egg & Milk',
      image: require('../../assets/img/egg.png'),
      backGround: '#DAF2FC'
    },
    {
      name: 'ice Cream',
      image: require('../../assets/img/icecream.png'),
      backGround: '#FFDEF6'
    },
    {
      name: 'Cake',
      image: require('../../assets/img/cakee.png'),
      backGround: '#FECA97'
    },
   


  ])



  return (

    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
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
          showsVerticalScrollIndicator={false}
          vertical
          data={category}
          renderItem={({ item }) => <ItemCategories category={item}
            onPress={() => {
              navigation.navigate('DealCategoryTab')

            }}
          />}

          refreshControl={
            <RefreshControl refreshing={refreshControl} onRefresh={() => {
              setRefreshControl(true)
              console.log("Refresh")
              // setData(mang_du_lieu)
              // setData(data.concat([ { title : "moi a nha"}]))
              setRefreshControl(false)
            }} colors={['green']} />
          }
  
  
          // //       Load More 
          // ListFooterComponent={() => (
          //   isLoading ? //  a==b ? b : a
          //     <View style={{
          //       marginTop: 10,
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       flexDirection: 'row',
          //       justifyContent: 'space-around',
          //       padding: 10,
          //       // width : WIDTH,
          //       // height : 50 ,
          //       flexDirection: 'column'
          //     }} >
          //       <Text > Tải Thêm </Text>
          //       <ActivityIndicator size="small" color='black' fontWeight='bold' />
          //     </View> : null
          // )}
          // onEndReached={() => {
          //   setIsLoading(true)
          //   console.log("Load More")
          //   // setData(mang_du_lieu)
  
          //   setTimeout(() => {
          //     //   setData(data.concat([ { title : "moi a nha"} ]))
          //     setIsLoading(false)
          //   }, 5000);
          // }}
          // onEndReachedThreshold={0.1}
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
    marginTop: 15,

   height:windowHeight-260,

  },
  item: {
    marginRight: 8,
    marginTop: 12,
    padding: 3,
  },

})