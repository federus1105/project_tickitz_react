
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage
import { combineReducers } from "redux";

const persistConfig = {
  key: "user",
  storage,
};

const rootReducer = combineReducers({
  auth: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(reduxStore);