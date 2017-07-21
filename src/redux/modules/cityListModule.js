import CITY_LIST from '../../constants/cityList';

export const types = {
    DELETE_LIST_ITEM: 'DELETE_LIST_ITEM'
};

export const actions = {
    deleteListItem: (index) => ({type: types.DELETE_LIST_ITEM, index})
};

const initialState = {
    list: CITY_LIST
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.DELETE_LIST_ITEM:
            return Object.assign(
                {},
                state,
                {
                    list: state.list.filter((item, i) => i !== action.index)
                }
            );
        default:
            return state;
    }
}
