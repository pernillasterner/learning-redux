import { useSelector } from "react-redux";

export const App = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <h1>Counter: {counter} </h1>
    </>
  );
};
