import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import stockReducer from './stock/Stock.reducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  stock: stockReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistedStore  = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>