import * as constants from '../constants';

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/auth/login',
        data,
        success: (response) => setUserInfo(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/auth/register',
        data,
        success: (response) => logoutUser(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});


export const forgotPassword = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/auth/forgotPassword',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const resetPassword = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/auth/resetPassword',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});


export const logoutUser = () => {
    localStorage.removeItem('user');
    return { type: constants.RESET_USER_INFO };
};

const setUserInfo = (data) => {
    const parsedToken = JSON.parse(atob(data.token.split('.')[1]));

    const userInfo = {
        id: parsedToken.id,
        token: data.token,
        name: data.data.user.name,
        email: data.data.user.email,
        isLoggedIn: true,
    };

    localStorage.setItem('user', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload: userInfo };
};
