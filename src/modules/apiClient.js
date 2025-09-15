const API_BASE = "http://localhost:1050/api/v1"

export const getForecast = (zipCode) => {
    return fetch(`${API_BASE}/${zipCode}/forecast`);
}