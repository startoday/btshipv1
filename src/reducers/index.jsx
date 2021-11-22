import gameState from "./gameState";
import { combineReducers } from "redux";
import placement from "./placement";
import localStorageOpen from "./localStorageOpen";
import rotateHintWindow from "./rotateHintWindow";
// use a combineReducer here for better extension
const allReducers = combineReducers({
    gameState: gameState,
    placement:placement,
    localStorageOpen: localStorageOpen,
    rotateHintWindow:rotateHintWindow,
})

export default allReducers;