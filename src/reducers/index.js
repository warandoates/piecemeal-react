import { combineReducers } from 'redux';
// import routines from './routines';
// import exercises from './exercises';
import auth from './auth';
import client from './client';
import ingredients from './ingredients';

const rootReducer = combineReducers({
  // import reducers and put them here
  // exercises,
  // routines,
  auth,
  client,
  ingredients,
});

export default rootReducer;
