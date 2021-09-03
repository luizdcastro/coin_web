import { combineReducers } from 'redux';

import user from './user/UserReducer';
import getme from './getme/getmeReducer'
import bot from './bot/BotReducer';
import template from './templates/TemplateReducer'

const rootReducer = combineReducers({
    user,
    getme,
    bot,
    template
});

export default rootReducer;