const initialState = {
    list: []
};
const executive = (state = initialState, action) => {
    if (action.type === 'GET_LIST_EXECUTIVE') {
        return { ...state, list: action.payload }
    }
    //payload object(executive) will get added in list    
    if (action.type === 'ADD_EXECUTIVE') {
        return { ...state, list: [...state.list, action.payload] }
    }
    return state;
};
export default executive;

