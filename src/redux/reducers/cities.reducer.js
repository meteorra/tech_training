import { citiesTypes as types } from '../constants';
import { assignNewState } from './utils';

export default (initialState) => {
    return (state = initialState, action = {}) => {
        switch (action.type) {
            case types.DELETE_LIST_ITEM: return deleteListItem(state, action);
            default: return state;
        }
    };
};

function deleteListItem(state, { id: actionId, }) {
    return assignNewState(
        state,
        { list: state.list.filter(({ id, }) => id !== actionId), }
    );
}



