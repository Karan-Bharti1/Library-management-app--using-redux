import { applyMiddleware, createStore } from "redux";
import libraryReducer from "./LibraryReducer";
import loggerMiddleware from "./loggerMiddleware";

const store=createStore(libraryReducer,applyMiddleware(loggerMiddleware))
export default store;