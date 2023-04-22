import React from 'react';
import { View, Text } from 'react-native';

const CartItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name} - ${item.price} </Text>
    </View>
  );
};

export default CartItem;
