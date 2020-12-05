import axios from 'axios'

export const fetchUserAction = () => {
    return (dispatch) => {
        axios.get('/api/currentUser')
        .then((resp) => {
            dispatch({type: 'GET_USER', payload:resp.data})
        })
    }
}