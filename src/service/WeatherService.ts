import { IWeatherService, IWeatherState, IDate } from "../Interfaces";

const fetchUrl = process.env.WEATHER_FETCH_ADDRESS;
const picUrl = process.env.WEATHER_PIC_URL;

export default class WeatherService implements IWeatherService {
  GetLocation = (latitude: number, longtitude: number): Promise<string> => {
    return new Promise<string>((res, rej) => {
      fetch(
        fetchUrl + `/api/location/search/?lattlong=${latitude},${longtitude}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      )
        .then(x => {
          if (!x.ok) {
            throw new Error("not a valid answer!");
          }
          return x;
        })
        .then(x => x.json())
        .then(x => x[0].woeid)
        .then(x => res(x));
    });
  };

  FetchWeather(woeid: string): Promise<IWeatherState> {
    return new Promise<IWeatherState>((res, rej) => {
      fetch(fetchUrl + `/api/location/${woeid}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(x => {
          if (!x.ok) {
            throw new Error("not a valid answer!");
          }
          return x;
        })
        .then(x => x.json())
        .then(x => {
          const result: IWeatherState = {
            title: x.title,
            timezone: x.timezone,
            days: []
          };

          x.consolidated_weather.forEach(t => {
            const shorten = t.weather_state_abbr;

            const day: IDate = {
              temp_min: t.min_temp,
              temp_avg: t.the_temp,
              temp_max: t.max_temp,
              weather_state_abbr: t.weather_state_abbr,
              applicable_date: new Date(t.applicable_date),
              pic: `${picUrl}/static/img/weather/${shorten}.svg`,
              id: t.id
            };
            result.days.push(day);
          });

          res(result);
        })
        .catch(err => {
          console.log("ERROR", err);
          rej(err);
        });
    });
  }
}
