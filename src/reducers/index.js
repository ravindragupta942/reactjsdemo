import { FETCH_USER } from '../actions/index';

const InitialState = {};
const reducer = (state = InitialState, action) => {
    const { payload } = action;
    if (action.type === FETCH_USER) {
        return {
            ...state,
            payload
        }
    } else {
        return InitialState;
    }
}

export default reducer;