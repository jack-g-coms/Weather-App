import * as mui from '@mui/material';
import * as icons from '@mui/icons-material';

const WeatherCard = ({data, forecast, date}) => {
    const conditions = data.condition;

    return <mui.Card sx={{maxWidth: '30%'}} variant="outlined">
        <mui.CardContent>
            <mui.Typography variant="h6">{conditions.text}</mui.Typography>
            {date && <mui.Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{date}</mui.Typography>}

            <mui.Grid container alignItems="center" direction="column" spacing={2}>
                <img
                    src={conditions.icon}
                    height="125"
                    width="125"
                />

                <mui.Typography variant="h3">
                    {!forecast ? data.temp_f : `~${data.avgtemp_f}`}&deg;F
                </mui.Typography>

                <mui.Grid container alignItems="center" direction="row" spacing={3}>
                    <mui.Grid container alignItems="center" direction="row" spacing={0.7}>
                        <icons.WaterDrop fontSize="large"/>
                        <mui.Grid container direction="column" spacing={0}>
                            <mui.Typography variant="h8">{!forecast ? data.humidity : data.avghumidity}%</mui.Typography>
                            <mui.Typography variant="h8">Humidity</mui.Typography>
                        </mui.Grid>
                    </mui.Grid>

                    <mui.Grid container alignItems="center" direction="row" spacing={0.7}>
                        <icons.Air fontSize="large"/>
                        <mui.Grid container direction="column" spacing={0}>
                            <mui.Typography variant="h8">{!forecast ? data.wind_mph : data.maxwind_mph} mph</mui.Typography>
                            <mui.Typography variant="h8">Wind Speed</mui.Typography>
                        </mui.Grid>
                    </mui.Grid>
                </mui.Grid>
            </mui.Grid>
        </mui.CardContent>
    </mui.Card>
}

export default WeatherCard;