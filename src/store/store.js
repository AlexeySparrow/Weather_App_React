import {combineReducers, createStore} from "redux";
import {mainReducer} from "./redusers/mainReducer";
import {mainBoardReducer} from "./redusers/mainBoardReducer";
import {leftPanelReducer} from "./redusers/leftPanelReducer";

let reducers = combineReducers({
    main: mainReducer,
    mainBoard: mainBoardReducer,
    leftPanel: leftPanelReducer
});

let store = createStore(reducers);

export default store;