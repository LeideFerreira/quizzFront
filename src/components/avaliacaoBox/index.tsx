import React from 'react';

import { Container} from './styles';

const AvaliacaoBox: React.FC = ({children}) => {
    return (
        <Container>
            <header>
                {children}
            </header>

        </Container>
    )
}

export default AvaliacaoBox;