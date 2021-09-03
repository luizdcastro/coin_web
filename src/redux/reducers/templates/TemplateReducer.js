import * as constants from '../../constants';

export default function templateReducer(state = [], action) {
    switch (action.type) {
        case constants.GET_TEMPLATE:
            return { ...action.payload };
        case constants.GET_ALL_TEMPLATES:
            return [...action.payload];
        default:
            return state;
    }
}