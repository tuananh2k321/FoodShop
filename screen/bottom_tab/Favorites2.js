import { StyleSheet, Text, View, SafeAreaView,RefreshControl,Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';
import ItemFavorites from '../../components/ItemFavorites';
import Dialog from 'react-native-dialog'
const windowHeight = Dimensions.get('window').height

const Favorites2 = (props) => {
  const { navigation } = props
  const [refreshControl, setRefreshControl] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    {
      name: 'Avocado Bowl',
      image: require('../../assets/img/bo.png'),
      weight: "1kg,priceg",
      price: '$3,99'
    },{
      name: 'Avocado Bowl',
      image: require('../../assets/img/bo.png'),
      weight: "1kg,priceg",
      price: '$3,99'
    },{
      name: 'Avocado Bowl',
      image: require('../../assets/img/bo.png'),
      weight: "1kg,priceg",
      price: '$3,99'
    },{
      name: 'Avocado Bowl',
      image: require('../../assets/img/bo.png'),
      weight: "1kg,priceg",
      price: '$3,99'
    },

  ])

  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
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
          marginBottom: 20
        }}>
        Favorites
      </Text>

      <View style={{ backgroundColor: 'white',height: windowHeight-200}}>
        <SwipeListView
          data={deals}
          renderItem={({ item }) => <ItemFavorites favorites={item}
            onPress={() => navigation.navigate('CartDetail')}
          />}
          showsVerticalScrollIndicator={false}

          //Refresh
          refreshControl={
            <RefreshControl refreshing={refreshControl} onRefresh={() => {
              setRefreshControl(true)
              console.log("Refresh")
              // setData(mang_du_lieu)
              // setData(data.concat([ { title : "moi a nha"}]))
              setRefreshControl(false)
            }} colors={['green']} />
          }


          //       Load More 
          ListFooterComponent={() => (
            isLoading ? //  a==b ? b : a
              <View style={{
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
                // width : WIDTH,
                // height : 50 ,
                flexDirection: 'column'
              }} >
                <Text > Tải Thêm </Text>
                <ActivityIndicator size="small" color='black' fontWeight='bold' />
              </View> : null
          )}
          onEndReached={() => {
            setIsLoading(true)
            console.log("Load More")
            // setData(mang_du_lieu)

            setTimeout(() => {
              //   setData(data.concat([ { title : "moi a nha"} ]))
              setIsLoading(false)
            }, 5000);
          }}
          onEndReachedThreshold={0.1}


          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={showDialog}
              style={{
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
      </View>

      <Dialog.Container visible={visible}>
        <Dialog.Title>Food delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this Food? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </SafeAreaView>
  );
}

export default Favorites2

