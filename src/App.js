import * as react from 'react';
import SearchZip from './components/SearchZip';
import Dashboard from './components/Dashboard';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as mui from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

const App = () => {
    const [zipCode, setZipCode] = react.useState();

    return <>
        <ThemeProvider theme={darkTheme}>
            <mui.Grid alignItems="center" direction="column" sx={{height: "100%"}} container>
                {!zipCode 
                    ? <SearchZip onNewZipCode={setZipCode}/> 
                    : <Dashboard zipCode={zipCode} setZipCode={setZipCode}/>
                } 
            </mui.Grid>
        </ThemeProvider>
    </>
}

export default App;