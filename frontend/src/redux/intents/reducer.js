import { getAllIntents } from 'Services/server/intents';

const initialState = {
  intentList: getAllIntents()
};

export default (state = initialState, action) => {
  switch (action.TYPE) {
    default:
      return state;
  }
};
