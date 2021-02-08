import React, { useState } from 'react';
import { useFetch } from "../../hooks/useFetch";

interface Quizz {
    id: number;
    pergunta: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correta: string;
    resolucao: string;
}

const ShowQuizz: React.FC = () => {
    const { data } = useFetch<Quizz[]>('/api/question/'); //#pegar dados da api
    console.log(data);
    var qtd_questao = data?.length;

    const [atual, setQuestao_atual] = useState(0); //para atualizar a questao
    const [mostra_pontuacao, setMostra_pontuacao] = useState(false); //Quando terminar eu atualizo para true
    const [score, setScore] = useState(0);
   // const [correta, setCorreta] = useState('A'); //valor inicial

    if (!data) {
        return (
            <p>Carregando...</p>
        )
    }

    const questaoCorretaClick = (escolha: string) => {
        console.log(escolha)
        console.log(data[atual].correta)
        if (escolha === data[atual].correta) {
            setScore(score + 1);
        }
        const proxima = atual + 1;
        if (proxima < data.length) {
            setQuestao_atual(proxima);
        } else {
            setMostra_pontuacao(true);
        }
    }

    return (
        <div className='app'>
            {mostra_pontuacao ? (//Caso true
                <div className='score-section'>
                    You scored {score} out of {qtd_questao}
                </div>
            ) : ( //senao
                    <>
                        <div className='question-section'>
                            <div className='question-count' >
                                <span>Question {atual + 1}</span> / {qtd_questao}
                            </div>
                            <div className='question-text'>
                                {data[atual].pergunta}
                            </div>
                            <div className='answer-section'>
                                <button onClick={() => questaoCorretaClick("A")}>{data[atual].a}</button>
                                <button onClick={() => questaoCorretaClick("B")}>{data[atual].b}</button>
                                <button onClick={() => questaoCorretaClick("C")}>{data[atual].c}</button>
                                <button onClick={() => questaoCorretaClick("D")}>{data[atual].d}</button>
                            </div>
                        </div>
                    </>
                )
                }
        </div>
    );

}
export default ShowQuizz;