import flyer from "../reducer/flyer"

export const listFlyer= () => (dispatch) =>{
    fetch('http://localhost:8585/api/flyer/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_FLYER',payload: data}) )
}
export const addFlyer = (data) => {
    return {
        type: 'ADD_FLYER',
        payload: data
    }
}
export const flyerById= () => (dispatch) =>{
    fetch('http://localhost:8585/api/flyer//one/{flyerId}' + flyer.flyerById)
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_FLYER_BY_ID',payload: data}) )
}