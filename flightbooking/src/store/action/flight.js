export const listFlight = () => (dispatch) => {
    fetch('http://localhost:8585/api/flight/getall')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'GET_LIST_FLIGHT', payload: data
        }))
}
export const addFlight = (data) => {
    return {
        type: 'ADD_FLIGHT',
        payload: data
    }
}

