import React from 'react';
import GlobalStyles from './styles/Globalstyles';
import {ThemeProvider} from 'styled-components';
import dark from './styles/themes/dark';
import Routes from './routes';
import {AuthProvider} from './hooks/auth';


const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
        <GlobalStyles />
        <AuthProvider>
            <Routes/>
        </AuthProvider>
        </ThemeProvider>
    );
}

export default App;