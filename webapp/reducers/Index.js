import { combineReducers } from 'redux';

import notification from './Notification';
import globals from './Global';

export default combineReducers({
    notification,
    globals
});