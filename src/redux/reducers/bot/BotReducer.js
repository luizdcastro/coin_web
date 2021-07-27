import * as constants from '../../constants';

export default function botReducer(state = [], action) {
    switch (action.type) {
        case constants.CREATE_BOT:
            return { ...action.payload };
        case constants.GET_BOT:
            return { ...action.payload };
        case constants.GET_ALL_BOTS:
            return [...action.payload];
        case constants.UPDATE_BOT:
            return { ...action.payload };
        case constants.DELETE_BOT:
            return { ...action.payload };
        default:
            return state;
    }
}