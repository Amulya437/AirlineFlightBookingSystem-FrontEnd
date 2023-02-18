const initialState = {
    list: []
}; 
const flight = (state = initialState, action) => {
    if (action.type === 'GET_LIST_FLIGHT') {
        return { ...state, list: action.payload }
    }
    //payload object(employee) will get added in list   
    if (action.type === 'ADD_FLIGHT') {
        return {
            ...state,
            list: [...state.list, action.payload]}
        }
        return state;
    };
    export default flight;
