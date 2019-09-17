import messages from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case messages.LOAD_FAIL:
      return action.payload;
    case messages.LOAD:
    case messages.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
