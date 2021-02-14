import React, { useState } from 'react';
import { useFetch } from "../../hooks/service";
import {
    Answer, Container, Question_Count, Question_Section, Question_Text, Score_Section,
} from './styles';

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
    var qtd_questao = data?.length;
    const [atual, setQuestao_atual] = useState(0); //para atualizar a questao
    const [mostra_pontuacao, setMostra_pontuacao] = useState(false); //Quando terminar eu atualizo para true
    const [score, setScore] = useState(0);

    if (!data) {
        return (
            <p>Carregando...</p>
        )
    }

    const questaoCorretaClick = (escolha: string) => {
        if (escolha === data[atual].correta) { setScore(score + 1);
        }
        
        const proxima = atual + 1;
        if (proxima < data.length) { setQuestao_atual(proxima);
        } else { setMostra_pontuacao(true);
        }
    }
    return (
        <Container>
            {mostra_pontuacao ? (//Caso true
                <Score_Section>You scored {score} out of {qtd_questao}
                </Score_Section>
            ) : ( //senao
                    <Question_Section>
                        <Question_Count><span>Questão {atual + 1} </span> / {qtd_questao}
                        </Question_Count>
                        <Question_Text>{data[atual].pergunta}
                        </Question_Text>
                        <Answer>
                            <button onClick={() => questaoCorretaClick("A")}>{data[atual].a}</button>
                            <button onClick={() => questaoCorretaClick("B")}>{data[atual].b}</button>
                            <button onClick={() => questaoCorretaClick("C")}>{data[atual].c}</button>
                            <button onClick={() => questaoCorretaClick("D")}>{data[atual].d}</button>
                        </Answer>
                    </Question_Section>
                )
            }
        </Container>
    );
}
export default ShowQuizz;