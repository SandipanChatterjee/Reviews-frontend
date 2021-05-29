import { createStore } from "redux";
import { rootReducer } from "./CombineReducer";
import { enhancer } from "./Enhancer";

export const store = createStore(rootReducer, enhancer);
