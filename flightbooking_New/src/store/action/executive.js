export const listExecutive = () => (dispatch) => {
    fetch('http://localhost:8585/api/executive/getAll')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_LIST_EXECUTIVE', payload: data }))
}
export const addExecutive = (data) => {
    return {
        type: 'ADD_EXECUTIVE',
        payload: data
    }
}