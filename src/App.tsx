import React from 'react';
import GlobalStyles from './styles/Globalstyles';
import {ThemeProvider} from 'styled-components';
import dark from './styles/themes/dark';
import Routes from './routes';
import {AuthProvider} from './hooks/auth';
import {AvaliacaoProvider} from './hooks/avaliacaoContext';


const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
        <GlobalStyles />
        <AuthProvider>
            <AvaliacaoProvider>
                <Routes/>
            </AvaliacaoProvider>
        </AuthProvider>
        </ThemeProvider>
    );
}

export default App;