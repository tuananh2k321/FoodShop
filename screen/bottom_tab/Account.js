import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR } from '../../contants/Themes'

const Account = (props) => {
  const { navigation } = props;
  const goToOrder = () => {
    navigation.navigate("Order")
  }
  const goToAddress = () => {
    navigation.navigate("Address")
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View>
        <TouchableOpacity>
          <Image source={require('../../assets/img/IconArrow.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: COLOR.primary,
            lineHeight: 28.8,
            alignSelf: 'center',
          }}>
          Account
        </Text>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 50,
            }}>
            <Image source={require('../../assets/icon/user1.png')} />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 27,
                color: '#6D3805',
              }}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToOrder}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 50,
            }}>
            <Image source={require('../../assets/icon/order.png')} />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 27,
                color: '#6D3805',
              }}>
              Order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={goToAddress}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 50,
            }}>
            <Image source={require('../../assets/icon/address.png')} />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 27,
                color: '#6D3805',
              }}>
              Address
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 50,
            }}>
            <Image source={require('../../assets/icon/payment.png')} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 27,
                color: '#6D3805',
              }}>
              Payment
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Account