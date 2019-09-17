import messages from "../constants";
import { IWeatherService } from "../Interfaces";

const loadTodayCast = (
  service: IWeatherService,
  latitude: number,
  longtitude: number
) => ({
  type: messages.LOAD,
  payload: {
    service: service,
    latitude: latitude,
    longtitude: longtitude
  }
});

const setTodayCast = info => ({
  type: messages.LOAD_SUCCESS,
  payload: info
});

const setError = error => ({
  type: messages.LOAD_FAIL,
  payload: error
});

export { loadTodayCast, setTodayCast, setError };
