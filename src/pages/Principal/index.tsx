import React from 'react';
import { Container, MenuItemlink,Div_Section } from './styles';
import ContentHeader from '../../components/contentHeader';

/*
clico em aleatorio ---> segue pro quiz/nivel_aleatorio
clico em nivel atual ----> segue pro quiz/nivel_atual
*/

const Principal: React.FC = () => {
    return (
        <Container>
              <ContentHeader title="Nivel"/>
              <Div_Section>
                <MenuItemlink href='/start/nivelaleatorio'>
                    <h1>Nivel aleatorio</h1>     
                </MenuItemlink>
                <MenuItemlink href='/start/nivelatual'>
                    <h1>Nivel Atual</h1>         
                </MenuItemlink>
            </Div_Section>
          
        </Container>
    );
}
export default Principal;