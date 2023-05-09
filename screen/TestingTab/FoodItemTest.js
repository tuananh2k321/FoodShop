import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const FoodItem = ({ food, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(food)}>
      <View>
        <Text>{food.name}</Text>
        <Text>Price: ${food.price}</Text>
        <Text>Price: ${food.price}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
