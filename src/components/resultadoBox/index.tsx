import React from 'react';

import { Container} from './styles';

const ResultadoBox: React.FC = ({children}) => {
    return (
        <Container>
            <header>
                {children}
            </header>

        </Container>
    )
}

export default ResultadoBox;