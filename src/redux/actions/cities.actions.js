export const types = {
    DELETE_LIST_ITEM: 'DELETE_LIST_ITEM',
};

export const actions = {
    deleteListItem: (id) => ({ type: types.DELETE_LIST_ITEM, id, }),
};
