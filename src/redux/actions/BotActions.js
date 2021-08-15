import * as constants from '../constants';

export const createBot= (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/bot',
        data,        
        success: (response) => createdBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const getBot= (botId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/bot/${botId}`,
        success: (response) => fetchBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const getAllBots = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: "/bot",
        success: (response) => fetchaAllBots(response),
    },
});

export const updateBot= (data, botId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PATCH',
        url: `/bot/${botId}`,
        data,
        success: (response) => updatedBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const deleteBot= (botId) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/bot/${botId}`,
        success: (response) => deletedBot(response),
    },
});


const createdBot= (data) => ({
    type: constants.CREATE_BOT,
    payload: data,
});

const fetchBot= (data) => ({
    type: constants.GET_BOT,
    payload: data,
});

const fetchaAllBots = (data) => ({
    type: constants.GET_ALL_BOTS,
    payload: data,
});

const updatedBot = (data) => ({
    type: constants.UPDATE_BOT,
    payload: data,
});

const deletedBot = (data) => ({
    type: constants.DELETE_BOT,
    payload: data,
});