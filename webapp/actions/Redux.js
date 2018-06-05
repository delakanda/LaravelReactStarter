import {
    HIDE_NOTIFICATION,
    SHOW_NOTIFICATION
} from './../utils/Constants';

export function showNotification(payload) {
    return { type: SHOW_NOTIFICATION, payload };
};

export function hideNotification() {
    return { type: HIDE_NOTIFICATION };
};