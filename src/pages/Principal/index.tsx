import React from 'react';
import { Container, MenuItemlink,Div_Section,Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import Bat from '../../assets/bat.svg';
import Atual from '../../assets/presuncoso.svg';

/*
clico em aleatorio ---> segue pro quiz/nivel_aleatorio
clico em nivel atual ----> segue pro quiz/nivel_atual
*/

const Principal: React.FC = () => {
    return (
        <Container>
              <ContentHeader title="Principal"/>
              <Content>
              <h2>Olá, vamos testar seu nível em matemática?</h2>
                <Div_Section>
                <MenuItemlink href='/start/nivelaleatorio'>
                    <h3><img src={Bat} alt=""/> Realizar Teste</h3> 
                </MenuItemlink>
                </Div_Section>
               <Div_Section>
               <MenuItemlink href='/start/nivelatual'>
                    <h3><img src={Atual} alt=""/> Praticar</h3>         
                </MenuItemlink>
               </Div_Section>
               
              </Content>          
        </Container>
    );
}
export default Principal;