import React, { useState } from 'react';
import { useFetch } from "../../hooks/service";
import { useAuth } from '../../hooks/auth';
import ResultadoBox from '../../components/resultadoBox';
import ContentHeader from '../../components/contentHeader';
import {
    Answer,
    Container,
    Question_Count,
    Answer_correta,
    Resolucao,
    Resultado_Section,
    Question_Section,
    Question_Text,
    MenuItemlink,
    Content
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
    
    const [q_escolha, setEscolha] = useState<String[]>([]);
    const [titulo, setTitulo] = useState("Rodada");

    const [pt_facil, setFacil] = useState(0);
    const [pt_medio, setMedio] = useState(0);
    const [pt_dificil, setDificil] = useState(0);
    const { user, atualizaAvaliacao } = useAuth();
    const { data } = useFetch<Quizz[]>('/api/question/'); //#pegar dados da api   

    var qtd_questao = data?.length;

    if (!data) {
        return (
            <p>Carregando...</p>
        )
    }

    var Meudata = data;
    const Situacao = (score: number) => {
        if (user) {
            if (score > 5) { atualizaAvaliacao(user.id, "D");
            } else { atualizaAvaliacao(user.id, "F")
            }
        }
    }

    const questaoCorretaClick = (escolha: string) => {
        q_escolha.push(escolha);
        if (escolha === Meudata[atual].correta) {
            setScore(score + 1);
            let temp = Meudata[atual].nivel;

            if (temp === "F") {
                setFacil(pt_facil + 1);
            } else if (temp === "M") {
                setMedio(pt_medio + 1);
            } else {
                setDificil(pt_dificil + 1);
            }
        }

        const proxima = atual + 1;
        if (proxima < Meudata.length) {
            setQuestao_atual(proxima);
        } else {
            Situacao(score);
            setMostra_pontuacao(true);
            setTitulo("Resultado");
        }
    }

    return (
        <Container>
            <ContentHeader title={titulo} />
            {mostra_pontuacao ? (//Caso true
                <Content>
                    <ResultadoBox>
                        <h2>Questões da Rodada</h2>
                        {Meudata.map((data) => (
                            <Resultado_Section>
                                <Question_Text><span>Pergunta: {data.pergunta}</span></Question_Text>
                                <Answer>A) {data.a}</Answer>
                                <Answer>B) {data.b}</Answer>
                                <Answer>C) {data.c}</Answer>
                                <Answer>D) {data.d}</Answer>
                                <Answer_correta>Alternativa correta: {data.correta}</Answer_correta>
                                <Resolucao>Resolução: {data.resolucao}</Resolucao>
                            </Resultado_Section>
                        ))}

                    </ResultadoBox>
                    <ResultadoBox>
                        <h2>Pontuação</h2>
                        <Resultado_Section>
                            <span> Sua pontuacao foi:</span> {score} de {qtd_questao} <br />
                            <span> Quantidade de acertos de questões facil: </span>{pt_facil} <br />
                            <span>Quantidade de acertos de questões media: </span>{pt_medio}  <br />
                            <span> Seu nivel é de: </span> {user?.nivel}  <br />
                        </Resultado_Section>
                        <MenuItemlink href='/avaliacao'>
                            <h1>Acessar avaliacao</h1>
                        </MenuItemlink>
                    </ResultadoBox>
                </Content>
            ) : ( //senao
                    <Question_Section>
                        <Question_Count><span>Questão {atual + 1} </span> / {qtd_questao}
                        </Question_Count>
                        <Question_Text>Nivel: {Meudata[atual].nivel} = {Meudata[atual].pergunta}
                        </Question_Text>
                        <Answer>
                            <button onClick={() => questaoCorretaClick("A")}>{Meudata[atual].a}</button>
                            <button onClick={() => questaoCorretaClick("B")}>{Meudata[atual].b}</button>
                            <button onClick={() => questaoCorretaClick("C")}>{Meudata[atual].c}</button>
                            <button onClick={() => questaoCorretaClick("D")}>{Meudata[atual].d}</button>
                        </Answer>
                    </Question_Section>
                )
            }
        </Container>
    );
}
export default ShowQuizz;