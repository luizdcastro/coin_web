import * as constants from '../constants';

export const getTemplate = (templateId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/template/${templateId}`,
        success: (response) => fetchTemplate(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const getAllTemplates = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: "/template",
        success: (response) => fetchAllTemplates(response),
    },
});

const fetchTemplate= (data) => ({
    type: constants.GET_TEMPLATE,
    payload: data,
});

const fetchAllTemplates = (data) => ({
    type: constants.GET_ALL_TEMPLATES,
    payload: data,
});

