import { all } from 'redux-saga/effects';
import app from './app/saga'
// import authSagas from './auth/saga';
// import todoSagas from './todo/saga';
// import chatSagas from './chat/saga';
// import surveyListSagas from './surveyList/saga';
// import surveyDetailSagas from './surveyDetail/saga';

export default function* rootSaga(getState) {
  yield all([
    app
  ]);
}
