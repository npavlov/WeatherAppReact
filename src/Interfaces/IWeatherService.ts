import { IWeatherState } from "./IWeatherState";

export interface IWeatherService {
  FetchWeather(woeid: string): Promise<IWeatherState>;
  GetLocation(latitude: number, longtitude: number): Promise<string>;
}
