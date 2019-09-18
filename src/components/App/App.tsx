import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "../Nav";
import { IWeatherService } from "../../Interfaces/IWeatherService";
import { IWeatherState } from "../../Interfaces/IWeatherState";
import { useDispatch, useSelector } from "react-redux";
import { loadTodayCast } from "../../AC";
import { createSelector } from "reselect";
import Spinner from "../Spinner";
import { getColorByAbbr } from "../../Helpers";
import WeatherContext from "../../context";
import Loadable from "react-loadable";

export default function App() {
  const weatherService: IWeatherService = useContext(WeatherContext);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadRequest = position => {
      const { latitude, longitude } = position.coords;

      dispatch(loadTodayCast(weatherService, latitude, longitude));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadRequest);
    }
  }, []);

  const forecastSelector = createSelector(
    (x: any) => x.forecast,
    (x: IWeatherState) => x
  );

  const loadingSelector = createSelector(
    (x: any) => x.loading,
    x => x
  );

  const loading = useSelector(loadingSelector);

  const weather = useSelector(forecastSelector);

  const spinnerBlock = loading && <Spinner />;

  const Today = Loadable({
    loader: () => import("../Today"),
    loading() {
      return <div>Loading...</div>;
    }
  });

  const Week = Loadable({
    loader: () => import("../Week"),
    loading() {
      return <div>Loading...</div>;
    }
  });

  const tabsBlock = !loading && (
    <Switch>
      <Route component={Today} path="/day" exact />
      <Route component={Week} path="/week" exact />
      <Route path="/" exact render={() => <Redirect to="/day" />} />
    </Switch>
  );

  const dayAbbr =
    weather.days.length > 0 ? weather.days[0].weather_state_abbr : "na";

  const backgroundColor = getColorByAbbr(dayAbbr);

  return (
    <div style={{ height: "100%", background: backgroundColor }}>
      {spinnerBlock}
      <Nav />
      {tabsBlock}
    </div>
  );
}
