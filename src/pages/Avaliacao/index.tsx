import React, { useMemo } from 'react';
import { Container, Score_Section, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import AvaliacaoBox from '../../components/avaliacaoBox';
import HistoryBox from '../../components/historyBox';
import { useAuth } from '../../hooks/auth';

const Avaliacao: React.FC = () => {
    const { user } = useAuth();

   
  
    return (
        <Container>
            <ContentHeader title="Avaliação" />
            <Content>
                <AvaliacaoBox>
                    <h2>De acordo com seu Perfil</h2> 
                    {user ? ( 
                        <Score_Section>
                            <p> Olá, {user.username} seu nível em Expressões Algebricas é {user.nivel}</p>  
                        </Score_Section>      
                    ) : (
                        <p>Wait...tá sem</p>
                    )}
               </AvaliacaoBox>
               <AvaliacaoBox>
                   <h2>Segunda Tela</h2>
               </AvaliacaoBox>
               {/* <HistoryBox
                data={}
                lineColorAmountEntry="#F7931B"
                lineColorAmountOutput="#CECECE"
               /> */}
            </Content>
        </Container >
    );
}

export default Avaliacao;
