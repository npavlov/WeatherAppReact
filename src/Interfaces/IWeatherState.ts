export interface IDate {
  temp_min: number;
  temp_max: number;
  temp_avg: number;
  weather_state_abbr: string;
  applicable_date: Date;
  pic: string;
  id: string;
}

export interface IWeatherState {
  title: string;
  timezone: string;
  days: IDate[];
}
