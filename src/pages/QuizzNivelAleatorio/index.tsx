import React, { useState } from 'react';
import { useFetch } from "../../hooks/service";

import {
    Answer,
    Container,
    Question_Count,
    Question_Section,
    Question_Text,
    Score_Section,
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

const ShowQuizz: React.FC = () =>{
    const [atual, setQuestao_atual] = useState(0); //para atualizar a questao
    const [mostra_pontuacao, setMostra_pontuacao] = useState(false); //Quando terminar eu atualizo para true
    const [score, setScore] = useState(0);
    const [situacao, setSituacao] = useState("bom");
     /*
        Essa useFetch pega todas as perguntas que estao no banco
        * Passos para selecionar as questões do usuário
            1 - Preciso inserir num dicionario somente as questões com nivel escolhido
            2 - Ao inserir no dicionario preciso selecionar aleatoriamente as questoes desse dicionario, so consulto o banco uma vez
    */

   var url = '/api/question/';
  
   const { data } = useFetch<Quizz[]>(url); //#pegar dados da api 
    var qtd_questao = data?.length;
    
    if (!data) {
        return (
            <p>Carregando...</p>
        )
    }
    var MeuData = data;
    let randomNumber;
    let tmp;
    let index

    //Ordenar a lista aleatoriamente
    for (index = MeuData.length; index;) { 
        randomNumber = Math.random() * index-- | 0;
        tmp = MeuData[randomNumber];
        MeuData[randomNumber] = MeuData[index];
        MeuData[index] = tmp;
    }

     function Situacao(score: number) {
        if (score > 5) {
            setSituacao('Otimo');
        } else {
            setSituacao('Ruim');
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
                    <span>  Sua pontuacao foi  </span> {score} de {qtd_questao}
                    <br />
                    <span> Nível do aluno:</span> {situacao}
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