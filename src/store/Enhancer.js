import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const enhancer = composeEnhancer(applyMiddleware(thunk));
