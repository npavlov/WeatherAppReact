import messages from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";
import { setTodayCast, setError } from "../AC";
import { IWeatherService } from "../Interfaces/IWeatherService";

function* LoaderSaga(action:any) {
  const { service, latitude, longtitude } = action.payload;

  try {
    const woeid = yield call(service.GetLocation, latitude, longtitude);
    console.log(woeid);
    const data = yield call(service.FetchWeather, woeid);
    yield put(setTodayCast(data));
  } catch (err) {
    yield put(setError(err));
  }
}

function* rootSaga() {
  yield takeEvery(messages.LOAD, LoaderSaga);
}

export default rootSaga;
