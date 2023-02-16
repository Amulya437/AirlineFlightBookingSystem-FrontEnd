export const ExecutiveList = () => (dispatch) => { 
    fetch('http://localhost:8585/api/executive/getAll')
    .then(response => response.json())
    .then(data => dispatch({ type: 'GET_LIST_EXECUTIVE', payload: data })) 
}