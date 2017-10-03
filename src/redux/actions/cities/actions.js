import { citiesTypes as types } from '../../constants';

const actions = {
    deleteListItem: (id) => ({ type: types.DELETE_LIST_ITEM, id, }),
};

export { actions as citiesActions };
