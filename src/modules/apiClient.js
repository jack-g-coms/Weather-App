const API_BASE = "https://weather-app-u11a.onrender.com/api/v1";

export const getForecast = (zipCode) => {
    return fetch(`${API_BASE}/${zipCode}/forecast`);
}