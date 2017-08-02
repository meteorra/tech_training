import { types } from '../constants/cities.types';

export const actions = {
    deleteListItem: (id) => ({ type: types.DELETE_LIST_ITEM, id, }),
};
