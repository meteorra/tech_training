import { citiesTypes as types } from '../../constants';
import { assignNewState } from '../utils';

export default (initialState) => {
    return (state = initialState, action = {}) => {
        switch (action.type) {
            case types.DELETE_LIST_ITEM: return deleteListItem(state, action);
            default: return state;
        }
    };
};

export const getCityFromCities = (state, code) => {
    return state.cities.find(el => el.cityCode === code);
};

function deleteListItem(state, { id: actionId, }) {
    return state.filter(({ id, }) => id !== actionId);
}



