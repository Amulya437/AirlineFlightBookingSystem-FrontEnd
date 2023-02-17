const initialState= {
    list: []
};
const flyer = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_FLYER'){
        return {...state, list: action.payload}
    }
     //payload object(flyer) will get added in list
     if(action.type === 'ADD_FLYER'){
        return {...state,  list : [...state.list, action.payload]}
    }
 return state;
};

export default flyer; 