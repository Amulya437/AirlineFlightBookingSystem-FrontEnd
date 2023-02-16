const initialState = {
    list: []
}; const executive = (state = initialState, action) => {
    if (action.type === 'GET_LIST_EXECUTIVE') {
        return { ...state, list: action.payload }
    }
    return state;
};
export default executive;