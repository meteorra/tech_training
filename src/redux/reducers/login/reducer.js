import { loginTypes as types } from '../../constants';
import { assignNewState } from '../utils';

export default (initialState) => {
    return (state = initialState, action = {}) => {
        switch (action.type) {
            case types.LOGIN_REQUEST: return loginRequest(state, action);
            case types.LOGIN_SUCCESS: return loginSuccess(state, action);
            case types.LOGIN_FAILURE: return loginFailure(state, action);
            default: return state;
        }
    };
};

export const getLoginToken = (state) => state.login.id_token;
export const getUserStatusFromLogin = (state) => state.login.isAuthenticated;

function loginRequest(state, { isFetching, isAuthenticated, creds }) {
    return assignNewState(
        state,
        { isFetching, isAuthenticated, creds }
    );
}

function loginSuccess(state, { isFetching, isAuthenticated, id_token, errorMessage }) {
    return assignNewState(
        state,
        { isFetching, isAuthenticated, id_token, errorMessage }
    );
}

function loginFailure(state, { isFetching, isAuthenticated, errorMessage }) {
    return assignNewState(
        state,
        { isFetching, isAuthenticated, errorMessage }
    );
}
