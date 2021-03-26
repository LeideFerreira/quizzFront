import React, { useState,useEffect } from 'react';
import { useFetch } from "../../hooks/service";
import { useAvaliacao } from '../../hooks/avaliacaoContext';
import {Answer,Container,Question_Count,Question_Section,Question_Text,Score_Section,} from './styles';

interface Quiz {
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
    //const [situacao, setSituacao] = useState("bom");
    const {avaliacao,getAvaliacao} = useAvaliacao();

    useEffect(()=>{ //Pego a avaliacao
        getAvaliacao()
    },[])
 
   const { data } = useFetch<Quiz[]>('/api/question/'); // Essa useFetch pega todas as perguntas que estao no banco

    if (!data || !avaliacao) { //verificar se existe data e avaliacao
        return (<p>Carregando...</p>)
    }

    //Variaveis para utilizar nas selecoes de questoes
    var data_aux = []
    var randomNumber,tmp,index,cont_aux = 0, ava = avaliacao[0].nivel;

    //Buscar somente questaos do nivel atual do usuario
    for (index = 0; index < data.length; index++){
        if(data[index].nivel == ava){// se o nivel da questao for igual ao nivel do usuario
            data_aux[cont_aux] = data[index];
            cont_aux++; //Se for igual acrescento o  contador dele
        }
    }

    var MeuData = data_aux;
    var qtd_questao = MeuData?.length;

    //Ordenar as questoes aleatoriamente
    for (index = MeuData.length; index;) { 
        randomNumber = Math.random() * index-- | 0;
        tmp = MeuData[randomNumber];
        MeuData[randomNumber] = MeuData[index];
        MeuData[index] = tmp;
    }

    //  function Situacao(score: number) {
    //     if (score > 5) {
    //         setSituacao('Otimo');
    //     } else {
    //         setSituacao('Ruim');
    //     }
    // }

    const questaoCorretaClick = (escolha: string) => {
        if (escolha === MeuData[atual].correta) setScore(score + 1);
        const proxima = atual + 1;

        if (proxima < MeuData.length) { 
            setQuestao_atual(proxima);
        } else {
           // Situacao(score);
            setMostra_pontuacao(true);
        }
    }

    return (
        <Container>
            {mostra_pontuacao ? (//Caso true
                <Score_Section>
                    <span>  Sua pontuacao foi  </span> {score} de {qtd_questao}
                    <br />
                    <span> Nível do aluno:</span> {avaliacao[0].nivel}
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