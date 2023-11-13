const counterReducer = (state = null, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMEMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
