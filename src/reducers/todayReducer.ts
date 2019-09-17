import messages from "../constants";
import { IWeatherState } from "../Interfaces";

interface IAction {
  type: string;
  payload: IWeatherState;
}

const todayReducer = (
  state: IWeatherState = {
    title: "n/a",
    timezone: "n/a",
    days: []
  },
  action: IAction
) => {
  if (action.type === messages.LOAD_SUCCESS) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default todayReducer;
