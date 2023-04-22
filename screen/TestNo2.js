import React, { useMemo, useCallback } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import CartItemTest from './CartItemTest';

const CartScreen = (props) => {
  const { navigation, route } = props;
  const { food } = route.params;
  const cart= [food];
  console.log(JSON.stringify(food))


  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <View>
      <Text>Cart:</Text>
      {cart.map((item) => (
        <Text key={item.id}>{item.name} - ${item.price}</Text>
      ))}
      <Text>Total: ${totalPrice}</Text>

      <Button title="Add more items" onPress={() => navigation.navigate('Test')} />
    </View>
  );
};

export default CartScreen;
