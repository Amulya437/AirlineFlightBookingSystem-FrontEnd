const initialState = {
    list: []
};
const airline = (state = initialState, action) => {
    if (action.type === 'GET_LIST_AIRLINE') {
        return { ...state, list: action.payload }
    }
    //payload object(airline) will get added in list   
    if (action.type === 'ADD_AIRLINE') {
        return { ...state, list: [...state.list, action.payload] }
    }
    return state;
};
export default airline;