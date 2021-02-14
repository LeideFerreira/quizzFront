import React from 'react';
import {Container,Header,LogImg,Menu,MenuItemlink,Title} from './styles';
import logoImg from '../../assets/question.svg'
import {MdExitToApp,MdDashboard} from 'react-icons/md'

const Aside: React.FC = () =>{
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt= "Logo meu Quizz"/>
                <Title>Home</Title>
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
                <MenuItemlink href='/sair'>
                    <MdExitToApp/>
                    Sair
                </MenuItemlink>
            </Menu>
        </Container>
    );
}

export default Aside;
