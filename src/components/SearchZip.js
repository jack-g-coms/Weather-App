import * as react from 'react';
import * as mui from '@mui/material';

import '../css/searchzip.css';

const SearchZip = ({onNewZipCode}) => {
    const [zipCode, setZipCode] = react.useState();
    const [error, setError] = react.useState();

    const isValidZipCode = (code) => {
        return code && code.length == 5 && parseInt(code) != null;
    }

    react.useEffect(() => {
        if (!zipCode || zipCode.length == 0) return setError(false);
        setError(!isValidZipCode(zipCode));
    }, [zipCode]);
    
    return <div className="zipcontainer">
        <mui.Grid direction="column" container spacing={2}>
            <h2 style={{margin: "2px"}}>Enter a Zip Code to Get Weather Info</h2>

            <mui.TextField
                id="outlined-error-helper-text"
                label="Zip Code"
                error={error}
                helperText={error && 'Enter a Valid U.S Zip Code'}
                onChange={(e) => setZipCode(e.target.value)}
                sx={{width: "100%"}}
            />

            <mui.Button variant="contained" onClick={() => {
                if (isValidZipCode(zipCode)) {
                    onNewZipCode(zipCode);
                }
            }}>Search</mui.Button>
        </mui.Grid>
    </div>
}

export default SearchZip;