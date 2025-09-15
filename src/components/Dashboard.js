import * as react from 'react';
import * as mui from '@mui/material';
import * as apiClient from '../modules/apiClient';

import WeatherCard from './WeatherCard';

import '../css/dashboard.css';

const Dashboard = ({zipCode, setZipCode}) => {
    const [loadedState, setLoadedState] = react.useState("loading")
    const forecastData = react.useRef();

    react.useEffect(() => {
        apiClient.getForecast(zipCode)
            .then((res) => {
                if (res.status == 200 && res.ok) {
                    return res.json();
                }
            })
            .then((res) => {
                forecastData.current = res;
                setLoadedState("loaded");
            })
            .catch(() => {
                setLoadedState("error");
            });
    }, []);

    return <mui.Grid container direction="column" alignItems="center" spacing={4}>
        {
            loadedState == "loading" && <mui.Grid className="dashboard-loaded-info" container direction="column" alignItems="center">
                <mui.CircularProgress color="info" size="6rem"/>
                <h2>Loading Forecast...</h2>
                <mui.Alert severity="info">While you wait, did you know that this app was made by Jack Goeders?</mui.Alert>
            </mui.Grid> ||

            loadedState == "error" && <mui.Grid className="dashboard-loaded-info" container direction="column" alignItems="center">
                <mui.Alert severity="error">Failed to fetch weather information.</mui.Alert>
                <mui.Button variant="contained" sx={{width: "100%"}} color="error" onClick={() => setZipCode(null)}>Go Back</mui.Button>
            </mui.Grid> ||
            
            loadedState == "loaded" && <>
                <mui.Grid container direction="column" spacing={0.75}>
                    <h2>Weather Information</h2>
                    <h2>{forecastData.current.location.name}, {forecastData.current.location.region}</h2>
                    <mui.Button variant="contained" sx={{width: "fit-content"}} onClick={() => setZipCode(null)}>Change Location</mui.Button>

                    <h2 id="current-conditions-title">Current Conditions</h2>
                    <WeatherCard data={forecastData.current.current}/>

                    <h2 id="forecast-conditions-title">5 Day Forecast</h2>
                    <mui.Grid container direction="row" spacing={1.5} wrap="nowrap" overflow="auto">
                        {forecastData.current.forecast.forecastday.map((v) => {
                            return <WeatherCard data={v.day} date={v.date} forecast/>
                        })}
                    </mui.Grid>
                </mui.Grid>
            </>
        }
    </mui.Grid>
}

export default Dashboard;