export const listAirline = () => (dispatch) => {
    fetch('http://localhost:8585/api/airline/getall')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_LIST_AIRLINE', payload: data }))
}
export const addAirline = (data) => {
    return {
        type: 'ADD_AIRLINE',
        payload: data
    }
}