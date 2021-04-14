import React, { useCallback, useEffect, useState } from 'react';
import { useFetch } from "../../hooks/service";
import { useAuth } from '../../hooks/auth';

import {
    Answer, Container, Question_Count, Question_Section, Question_Text, Score_Section, MenuItemlink
} from './styles';

interface Quizz {
    id: number;
    pergunta: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correta: string;
    nivel: string,
    resolucao: string;
}

const ShowQuizz: React.FC = () => {
    const [atual, setQuestao_atual] = useState(0); //para atualizar a questao
    const [mostra_pontuacao, setMostra_pontuacao] = useState(false); //Quando terminar eu atualizo para true
    const [score, setScore] = useState(0);
    const { user, atualizaAvaliacao } = useAuth();


    const { data } = useFetch<Quizz[]>('/api/question/'); //#pegar dados da api 
    var qtd_questao = data?.length;

    if (!data) {
        return (
            <p>Carregando...</p>
        )
    }
    var MeuData = data;
    let randomNumber, tmp, index

    //Ordenar a lista aleatoriamente
    for (index = MeuData.length; index;) {
        randomNumber = Math.random() * index-- | 0;
        tmp = MeuData[randomNumber];
        MeuData[randomNumber] = MeuData[index];
        MeuData[index] = tmp;
    }

    const Situacao = (score: number) => {
        if (user) {
            if (score > 5) {
                atualizaAvaliacao(user.id, "D");
            } else {
                atualizaAvaliacao(user.id, "F")
            }

        }
    }

    const questaoCorretaClick = (escolha: string) => {
        if (escolha === MeuData[atual].correta) setScore(score + 1);
        const proxima = atual + 1;

        if (proxima < MeuData.length) {
            setQuestao_atual(proxima);
        } else {
            Situacao(score);
            setMostra_pontuacao(true);
        }
    }

    return (
        <Container>
            {mostra_pontuacao ? (//Caso true
                <Score_Section>
                    {/*Aqui eu vou botar o resultado das questões e acertos do usuário */}
                    <span>  Sua pontuacao foi  </span> {score} de {qtd_questao}
                    <br />
                    <span>  Sua situacao eh: </span> {user?.nivel}
                    <MenuItemlink href='/avaliacao'>
                        <h1>Acessar avaliacao</h1>
                    </MenuItemlink>
                </Score_Section>
            ) : ( //senao
                    <Question_Section>
                        <Question_Count><span>Questão {atual + 1} </span> / {qtd_questao}
                        </Question_Count>
                        <Question_Text>Nivel: {MeuData[atual].nivel} = {MeuData[atual].pergunta}
                        </Question_Text>
                        <Answer>
                            <button onClick={() => questaoCorretaClick("A")}>{MeuData[atual].a}</button>
                            <button onClick={() => questaoCorretaClick("B")}>{MeuData[atual].b}</button>
                            <button onClick={() => questaoCorretaClick("C")}>{MeuData[atual].c}</button>
                            <button onClick={() => questaoCorretaClick("D")}>{MeuData[atual].d}</button>
                        </Answer>
                    </Question_Section>
                )
            }
        </Container>
    );
}
export default ShowQuizz;