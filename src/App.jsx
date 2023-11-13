import { createStore } from "redux";
import allReducer from "./reducers";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const App = () => {
  return (
    <>
      <h1>Hej</h1>
    </>
  );
};
