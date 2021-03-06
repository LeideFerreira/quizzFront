import React from 'react';
import {Container,Title} from './styles';

interface IContentHeaderProps {
    title: string;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({title}) =>{
    return (
        <Container>
            <Title>
                <h1>{title}</h1>
            </Title>
        </Container>

    );
}

export default ContentHeader;
