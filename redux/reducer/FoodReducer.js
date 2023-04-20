const data = {
    listFood: [],
    isLoading: false
}

export default FoodReducer = (state = data, {type, payLoad}) => {
    switch (type) {
        case 'GET_LIST_FOOD':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_LIST_FOOD_SUCCESS':
            return {
                ...state,
                listFood: payLoad,
                isLoading: false
            }
    
        default:
            return state
            
    }
}