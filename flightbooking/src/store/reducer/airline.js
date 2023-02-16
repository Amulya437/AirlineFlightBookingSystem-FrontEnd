const initialState = {
    list: []
}; const airline = (state = initialState, action) => {
    if (action.type === 'GET_LIST_AIRLINE') {
        return { ...state, list: action.payload }
    }
    return state;
};
export default airline;