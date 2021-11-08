import gameState from "./gameState";
import { combineReducers } from "redux";

// use a combineReducer here for better extension
const allReducers = combineReducers({
    gameState: gameState,
})

export default allReducers;