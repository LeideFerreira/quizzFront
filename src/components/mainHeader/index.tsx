import React from 'react';
import {Container, Profile, Welcome, Username} from './styles';

const MainHeader: React.FC = () =>{
    return (
        <Container>
            <h1></h1>
            <Profile>
                <Welcome>Olá,</Welcome>
                <Username>Leide Marina</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;
