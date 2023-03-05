import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {COLOR} from '../../contants/Themes'
import { SwipeListView } from 'react-native-swipe-list-view';
import ItemFavorites from '../../components/ItemFavorites';
import Dialog from 'react-native-dialog'
import ItemCard from '../../components/ItemCard';
const MyCard = (props) => {
    const{navigation} = props
    const [card, setCard] = useState([
        {
          name: 'MB bank',
          image: require('../../assets/img/mb-bank.jpg'),
          number: "5342 **** **** 6745",
          
        },
        {
          name: 'ACB',
          image: require('../../assets/img/acb.png'),
          number: "6589 **** **** 7850",
          
        },
        {
          name: 'Agribank',
          image: require('../../assets/img/agribank.png'),
          number: "5342 **** **** 6745",
         
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
    <SafeAreaView style={{flex: 1, padding: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/IconArrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewCard')}>
          <Image source={require('../../assets/icon/IconPlus.png')} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          color: COLOR.primary,
          lineHeight: 28.8,
          alignSelf: 'center',
          marginBottom: 30
        }}>
        My Cards
      </Text>

      <View style={{}}>
        <SwipeListView
          data={card}
          renderItem={({item}) => <ItemCard card={item} />}
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

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          height: 80,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          shadowColor: '#C4C4C4',
          shadowOffset: {width: 0, height: 6},
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icon/ipay.png')}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              resizeMode: 'stretch',
            }}
          />

          <View style={{justifyContent: 'space-around', marginLeft: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 21.6,
                color: COLOR.title,
              }}>
              Apple Pay
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/icon/check.png')}
            style={{
              fontSize: 20,
              fontWeight: '400',
              lineHeight: 21.6,
              color: COLOR.title,
            }}></Image>
        </View>
      </View>

      <Dialog.Container visible={visible}>
        <Dialog.Title>Warning</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this Card? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </SafeAreaView>
  );
}

export default MyCard

