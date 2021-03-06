import React from 'react';
import {Container,Header,LogImg,Menu,MenuItemlink,Title,MenuItemlButton} from './styles';
import logoImg from '../../assets/question.svg'
import {MdExitToApp,MdDashboard} from 'react-icons/md'
import {useAuth} from '../../hooks/auth';

const Aside: React.FC = () =>{
    const {signOut} = useAuth();
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt= "Logo meu Quizz"/>
                <Title>Quizz project</Title>
            </Header>
            <Menu>
                <MenuItemlink href='/principal'>
                    <MdDashboard/>
                     Principal
                </MenuItemlink>
                <MenuItemlink href='/avaliacao'>
                    <MdDashboard/>
                    Avaliação User
                </MenuItemlink>
                <MenuItemlButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemlButton>
            </Menu>
        </Container>
    );
}

export default Aside;
