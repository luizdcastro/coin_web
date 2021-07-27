import { combineReducers } from 'redux';

import user from './user/UserReducer';
import getme from './getme/getmeReducer'
import bot from './bot/BotReducer';


const rootReducer = combineReducers({
    user,
    getme,
    bot
});

export default rootReducer;