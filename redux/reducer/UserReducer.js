const data = {
    listUser: [],
    isLoading: false
}

export default UserReducer = (state = data, {type, payLoad}) => {
    switch (type) {
        case 'GET_LIST_USER':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_LIST_USER_SUCCESS':
            return {
                ...state,
                listUser: payLoad,
                isLoading: false
            }
    
        default:
            return state
            
    }
}