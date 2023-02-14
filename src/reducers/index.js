import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    favoritesReducer,
    movieReducer
})

export default rootReducer;