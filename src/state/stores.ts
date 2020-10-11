import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
  profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
