const initialState = 0;
const changeNumber = (state = initialState, action) => {
  if (action.type == "INC") {
    return state + action.payload;
  }
  if (action.type == "DEC") {
    if (state > 0) {
      return state - action.payload;
    } else {
      return state;
    }
  } else {
    return state;
  }
};
export default changeNumber;
