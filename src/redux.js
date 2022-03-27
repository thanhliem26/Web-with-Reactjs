import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './store/reducer/rootReducer'; // giá trị trả về từ combineReducers

const persistConfig = {
 key: 'demo',
 storage: storage,
 stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = createStore(pReducer);
export const persistor = persistStore(reduxStore);