import {
    SHOW_NOTIFICATION,
    NOTIFICATION_TYPE_SUCCESS,
    HIDE_NOTIFICATION
} from './../utils/Constants';

const initialState = {
    type: '',
    content: '',
    context: NOTIFICATION_TYPE_SUCCESS,
    display: false
};

export default function notification(state=initialState,action) {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            return { type: action.payload.type, context: action.payload.context, content: action.payload.content, display: true } 
        case HIDE_NOTIFICATION:
            return initialState;
        default:
            return state;
    }
}