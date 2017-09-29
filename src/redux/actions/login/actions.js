import { loginTypes as types } from '../../constants';
import { loadState, saveState } from '../../../localStorage';
import LoginAPI from '../../api/LoginAPI';

const actions = {
    requestLogin: (creds) => ({
        type: types.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds,
    }),
    receiveLogin: ({ id_token }) => ({
        type: types.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: id_token,
        errorMessage: '',
    }),
    failLogin: (message) => ({
        type: types.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: message
    })
};

export function loginUser(creds) {
    return (dispatch) => {
        dispatch(actions.requestLogin(creds));
        //LoginAPI.fetchLogin(creds)
        return Promise.resolve({user: {id_token: 'token', message: ''}, response: {ok: true}}).then(({user, response}) => {
            if (!response.ok) {
                dispatch(actions.failLogin(user.message));
                return Promise.reject(user);
            } else {
                saveState('id_token', user.id_token);
                saveState('access_token', user.access_token);
                dispatch(actions.receiveLogin(user));
            }
        }).catch(error => dispatch(actions.failLogin(error)));
    };
}


export { actions as loginActions };
