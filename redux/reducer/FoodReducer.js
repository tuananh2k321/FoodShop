const data = {
    listFoodFish: [],
    listFoodVegetable: [],
    listFoodFruit: [],
    listFoodMeat: [],
    isLoading: false
}

export default FoodReducer = (state = data, {type, payLoad}) => {
    switch (type) {
        case 'GET_LIST_FOOD':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_LIST_FOOD_FRUIT_SUCCESS':
            return {
                ...state,
                listFoodFruit: payLoad,
                isLoading: false
            }
        case 'GET_LIST_FOOD_MEAT_SUCCESS':
            return {
                ...state,
                listFoodMeat: payLoad,
                isLoading: false
            }
        case 'GET_LIST_FOOD_FISH_SUCCESS':
            return {
                ...state,
                listFoodFish: payLoad,
                isLoading: false
            }
        case 'GET_LIST_FOOD_VEGETABLE_SUCCESS':
            return {
                ...state,
                listFoodVegetable: payLoad,
                isLoading: false
            }
    
        default:
            return state
            
    }
}