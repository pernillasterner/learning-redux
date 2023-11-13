import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLoggedIn ? <h3>Show message only to logged in members.</h3> : ""}
    </>
  );
};
