import React from "react";
import { IWeatherService } from "../Interfaces/IWeatherService";

const WeatherContext = React.createContext<IWeatherService>(
  (undefined as any) as IWeatherService
);

export default WeatherContext;
