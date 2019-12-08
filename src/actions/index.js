
import axios from 'axios';

export const FETCH_USER = "FETCH_USER";

export const getUserList = (url) => {
    return (dispatch) => {
        dispatch({ type: FETCH_USER });
        return axios.get(url)
            .then(response => {
                dispatch({
                    type: FETCH_USER,
                    payload: response.data
                });
            })
            .catch(err => console.log(err))
    }
}

