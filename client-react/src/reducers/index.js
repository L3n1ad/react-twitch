import { combineReducers } from "redux";
import authReducer from "./authReducer";
// we can rename the imported feature straight away to make more sense
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

// reducer needs to be wired up from redux-from
// it needs to be signed under a name form
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
