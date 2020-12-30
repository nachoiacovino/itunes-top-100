import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import albums from './albums/albumsReducer';

const persistConfig = { key: 'root', storage, whitelist: ['albums'] };

const rootReducer = combineReducers({ albums });

export default persistReducer(persistConfig, rootReducer);
