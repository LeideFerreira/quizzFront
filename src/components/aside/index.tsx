import React from 'react';
import {Container,Header,LogImg,Menu,MenuItemlink,Title} from './styles';
import logoImg from '../../assets/question.svg'
import {MdExitToApp,MdDashboard} from 'react-icons/md'



const Aside: React.FC = () =>{
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt= "Logo meu Quizz"/>
                <Title>Quizz</Title>
            </Header>
            <Menu>
                <MenuItemlink href='#'>
                    <MdDashboard/>
                     Principal
                </MenuItemlink>
                <MenuItemlink href='#'>
                    <MdDashboard/>
                    Avaliação User
                </MenuItemlink>
                <MenuItemlink href='#'>
                    <MdExitToApp/>
                    Sair
                </MenuItemlink>
            </Menu>
        </Container>
    );
}

export default Aside;
