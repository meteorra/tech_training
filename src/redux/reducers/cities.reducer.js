import { types } from '../actions/cities.actions';
import { initialState } from '../states/cities.state';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.DELETE_LIST_ITEM: return deleteListItem(state, action);
        default: return state;
    }
}

function deleteListItem(state, action) {
    return Object.assign(
        {},
        state,
        {
            list: state.list.filter(({ id, }) => id !== action.id),
        }
    );
}

