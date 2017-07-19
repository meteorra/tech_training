export const types = {
    DELETE_LIST_ITEM: 'DELETE_LIST_ITEM'
};

export const actions = {
    deleteListItem: (index) => ({type: types.DELETE_LIST_ITEM, index})
};

const initialState = {
    list: [{item: 'Minsk'}, {item: 'Brest'}, {item: 'Vitebsk'}]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.DELETE_LIST_ITEM:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.index),
                        ...state.list.slice(action.index + 1)
                    ]
                }
            );
        default:
            return state;
    }
}
