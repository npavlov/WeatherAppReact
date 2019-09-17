import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import App from "./components/App";
import configureStore from "./store";

import "./styles.css";
import { Provider } from "react-redux";
import { IWeatherService } from "./Interfaces/IWeatherService";
import WeatherService from "./service";
import WeatherContext from "./context";

const store = configureStore();

const rootElement = document.getElementById("root");

const weatherService: IWeatherService = new WeatherService();

render(
  <WeatherContext.Provider value={weatherService}>
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>
  </WeatherContext.Provider>,
  rootElement
);
