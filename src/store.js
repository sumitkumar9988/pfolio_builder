import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxReset from "redux-reset";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  settingDrawerReducers,
  imageDrawerReducers,
} from "./redux/Reducers.js/Index";

const reducer = combineReducers({
  settingDrawer: settingDrawerReducers,
  imageDrawer: imageDrawerReducers,
});

const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
  reducer,
  initialState,

  composeEnhancers(applyMiddleware(...middleware), reduxReset())
);
export default store;
