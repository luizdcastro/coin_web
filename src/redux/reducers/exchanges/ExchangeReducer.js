import * as constants from '../../constants';

export default function exchangeReducer(state = [], action) {
    switch (action.type) {
        case constants.CREATE_EXCHANGE:
            return { ...action.payload };
        case constants.GET_EXCHANGE:
            return { ...action.payload };
        case constants.DELETE_EXCHANGE:
            return { ...action.payload };
        default:
            return state;
    }
}