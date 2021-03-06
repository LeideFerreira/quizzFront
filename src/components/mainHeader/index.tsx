import React from 'react';
import {Container, Profile, Welcome, Username} from './styles';
import {useAuth} from '../../hooks/auth';


const MainHeader: React.FC = () =>{
    const {user} = useAuth();   
    return (
        <Container>
            <h1></h1>
            <Profile>
                <Welcome>Olá, </Welcome>
                <Username>{user?.username}</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;
