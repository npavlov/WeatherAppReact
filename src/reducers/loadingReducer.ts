import messages from "../constants";

const loadReducer = (state = false, action) => {
  switch (action.type) {
    case messages.LOAD:
      return true;
    case messages.LOAD_FAIL:
    case messages.LOAD_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadReducer;
