import { citiesTypes as types } from '../constants';

export const actions = {
    deleteListItem: (id) => ({ type: types.DELETE_LIST_ITEM, id, }),
};
