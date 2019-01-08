import { combineReducers } from 'redux';
import app from './app/reducer';
import domains from './domains/reducer';
import intents from './intents/reducer';
import navs from './navs/reducer';
import agents from './agents/reducer';

const reducers = combineReducers({
  app,
  agents,
  domains,
  intents,
  navs
});

export default reducers;
