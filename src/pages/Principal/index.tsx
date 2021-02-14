import React from 'react';
import { Container, MenuItemlink } from './styles';
import ContentHeader from '../../components/contentHeader';

const Start: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Inicio"/>
            <MenuItemlink href='/start'>
                <h1>Link Start</h1>         
            </MenuItemlink>
        </Container>
    );
}
export default Start;