import {
    
} from './../utils/Constants';

const initialState = {
    
};

export default function notification(state=initialState,action) {
    switch(action.type) {
        // case SHOW_NOTIFICATION:
        //     return { type: action.payload.type, context: action.payload.context, content: action.payload.content, display: true } 
        // case HIDE_NOTIFICATION:
        //     return initialState;
        // case LOCATION_CHANGE:
        //     return initialState;
        default:
            return state;
    }
}