const initialState = {
    list: []
};
const airline = (state = initialState, action) => {
    if (action.type === 'GET_LIST_AIRLINE') {
        return { ...state, list: action.payload }
    }
<<<<<<< HEAD
    //payload object(airline) will get added in list   
=======
    //payload object(airline) will get added in list   
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
    if (action.type === 'ADD_AIRLINE') {
        return { ...state, list: [...state.list, action.payload] }
    }
    return state;
};
export default airline;