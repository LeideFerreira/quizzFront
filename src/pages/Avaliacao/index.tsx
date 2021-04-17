import React, { useMemo } from 'react';
import { Container, Score_Section, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import AvaliacaoBox from '../../components/avaliacaoBox';
import HistoryBox from '../../components/historyBox';
import { useFetch } from "../../hooks/service";
import { useAuth } from '../../hooks/auth';

interface Rodada{
    id: number,
    pontFacil: number;
    pontMedia: number;
    pontDificil: number;
    user: number;
  }

const Avaliacao: React.FC = () => {
    const { user } = useAuth();
    const {data} =  useFetch<Rodada[]>('/api/rodada/'); //#pegar dados da api   

    if(!data){
        return (<p>Carregando...</p>)
    }
  
    let qtd_rodada = data.length;
    var rodadas = []
    let i;
    if(qtd_rodada>5){//quero pegar as ultimas 5 rodadas do usuario
        for(i=qtd_rodada-5; i<=qtd_rodada; i++){
            rodadas.push(data[i]);
        }
    }else{
        rodadas=data;//se for menor ou igual vai so as cinco primeiras msm
    }


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
               <HistoryBox
                data={rodadas}
                lineColorpontFacil="#F7931B"
                lineColorpontMedia="#CECECE"
                lineColorpontDificil="#4E41F0"
               />
            </Content>
        </Container >
    );
}

export default Avaliacao;
