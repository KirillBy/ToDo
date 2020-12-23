import { combineReducers } from "redux";
import {item} from "./item";
import {components} from "./components"
export const reducers = combineReducers({
    item, components
})