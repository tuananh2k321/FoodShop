import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const FOODS = [
  { id: 1, name: 'Hamburger', price: 10, quantity: 2 },
  { id: 2, name: 'Pizza', price: 12, quantity: 1 },
  { id: 3, name: 'Hot Dog', price: 8, quantity: 3 },
];

const FoodItem = ({ food, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(food)}>
      <View>
        <Text>{food.name}</Text>
        <Text>Price: ${food.price}</Text>
        <Text>quantity: {food.quantity}</Text>

      </View>
    </TouchableOpacity>
  );
};

const ShoppingCart = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  console.log("Array" + JSON.stringify(cart))

  const addToCart = useCallback((food) => {
    setCart((prevCart) => [...prevCart, food]);
   // navigation.navigate('TestNo2', { food });
  console.log("Array" + JSON.stringify(cart))

  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const renderFoodItem = useCallback(({ item }) => {
    return <FoodItem food={item} onPress={addToCart} />;
  }, [addToCart]);

  return (
    <View>
      <Text>Available Foods:</Text>
      <FlatList
        data={FOODS}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Cart:</Text>
      {cart.map((item) => (
        <Text key={item.id}>{item.name} - ${item.price}</Text>
      ))}
      <Text>Total: ${totalPrice}</Text>
    </View>
  );
};

export default ShoppingCart