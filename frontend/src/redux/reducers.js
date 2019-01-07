import { combineReducers } from "redux";
import app from "./app/reducer";
import domains from "./domains/reducer";
import intents from "./intents/reducer";
import navs from './navs/reducer'

const reducers = combineReducers({
  app,
  domains,
  intents,
  navs
});

export default reducers;
