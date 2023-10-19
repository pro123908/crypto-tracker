import { combineReducers } from "redux";

import { api } from "../../services/api";
import theme from "../slices/themeSlice";

const reducers = combineReducers({
  theme: theme,
  [api.reducerPath]: api.reducer,
});

export default reducers;
