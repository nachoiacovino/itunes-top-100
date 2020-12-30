import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import songs from './songs/songsReducer';

const persistConfig = { key: 'root', storage, whitelist: ['songs'] };

const rootReducer = combineReducers({ songs });

export default persistReducer(persistConfig, rootReducer);
