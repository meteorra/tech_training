const FORECAST_API_PROTOCOL = 'http://';
const FORECAST_API_ENDPOINT = 'api.openweathermap.org';
const FORECAST_APPID = '5f7fd37860afa128f5b86690e4c25597';

export default class ForecastApi {
    static fetchCityForecast(city) {
        const url = `${FORECAST_API_PROTOCOL}${FORECAST_API_ENDPOINT}/data/2.5/weather?q=${city}&APPID=${FORECAST_APPID}`;
        const config = {};

        return fetch(url, config)
            .then(response => response.json())
            .catch(error => error);
    }
}

