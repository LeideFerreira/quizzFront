import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import ResultadoBox from '../../components/resultadoBox';
import ContentHeader from '../../components/contentHeader';
import {
    Answer, Container, Question_Count, Answer_correta, Resolucao, Resultado_Section, Question_Section,
    Question_Text, MenuItemlink, Content, Link_Item, Image_Section
} from './styles';

interface Quiz {
    id: number;
    pergunta: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correta: string;
    nivel: string,
    resolucao: string,
    fotoResolucao: string,
    fotoPergunta: string,
}

interface Props {
    quiz: Quiz[] | undefined;
    aleatorio: boolean; //para verificar se vai ser um nivel aleatorio ou atual
}

const ShowQuiz: React.FC<Props> = ({ quiz, aleatorio }) => {
    const [atual, setQuestao_atual] = useState(0); //para atualizar a questao
    const [mostra_pontuacao, setMostra_pontuacao] = useState(false); //Quando terminar eu atualizo para true
    const [score, setScore] = useState(0); //score
    const [titulo, setTitulo] = useState("Rodada");
    const [pt_facil, setFacil] = useState(0);
    const [pt_medio, setMedio] = useState(0);
    const [pt_dificil, setDificil] = useState(0);
    const { user, atualizaAvaliacao, novaRodada } = useAuth();

    //caso seja uma rodada avaliativa
    var rodada = { //object com os dados da rodada atual
        pontFacil: pt_facil,
        pontMedia: pt_medio,
        pontDificil: pt_dificil,
        user: user?.id,
    }

    useEffect(() => {
        if (mostra_pontuacao && aleatorio == true) {//so salva uma rodada se for avaliativa
            novaRodada(rodada);
        }
    }, [mostra_pontuacao])

    if (!quiz) {
        return (<p>Carregando...</p>)
    }
    var Meudata = quiz;
    var qtd_questao = Meudata.length;

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
        if (escolha === Meudata[atual].correta) {
            setScore(score + 1);
            let temp = Meudata[atual].nivel;
            if (temp === "F") {
                setFacil(pt_facil + 1);
            }
            if (temp === "M") {
                setMedio(pt_medio + 1);
            } if (temp === "D") {
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
                        {Meudata.map((data, index) => (
                            <Resultado_Section>
                                <Question_Text>Pergunta: {data.pergunta}</Question_Text>
                                <Answer>A) {data.a}</Answer>
                                <Answer>B) {data.b}</Answer>
                                <Answer>C) {data.c}</Answer>
                                <Answer>D) {data.d}</Answer>
                                <Answer_correta>Alternativa correta: {data.correta}</Answer_correta>
                                <Resolucao>Resolução: {data.resolucao} </Resolucao>
                                <Resolucao> {data.fotoResolucao && (
                                    <img src={data.fotoResolucao} alt="" />
                                )}</Resolucao>
                            </Resultado_Section>
                        ))}
                    </ResultadoBox>
                            {aleatorio ?( //se for na rodada avaliativa
                                <ResultadoBox>
                                <h2>Pontuação</h2>
                                <Resultado_Section>
                                    <Question_Text><span>Você acertou {score} de {qtd_questao} questões!</span> </Question_Text>
                                    <Question_Text>Acertos em questões de nível facil: {pt_facil}</Question_Text>
                                    <Question_Text>Acertos em questões de nível médio: {pt_medio}</Question_Text>
                                    <Question_Text>Acertos em questões de nível Dificil: {pt_dificil} </Question_Text>
        
                                    <Question_Text> <span>Seu nível em matemática é </span>{user?.nivel === "F" && (
                                        <span>Iniciante</span>
                                    )}
                                        {user?.nivel === "M" && (
                                            <span>Intermediário</span>
                                        )}
                                        {user?.nivel === "D" && (
                                            <span>Avançado</span>
                                        )}</Question_Text>
                                </Resultado_Section>
                                <Link_Item>
                                    <MenuItemlink href='/avaliacao'>
                                        <h3> Acessar avaliação </h3>
                                    </MenuItemlink>
                                </Link_Item>
                            </ResultadoBox>
                            ):( //senao eh uma rodada de pratica
                                <ResultadoBox>
                                <h2>Pontuação</h2>
                                <Resultado_Section>
                                    <Question_Text><span>Você acertou {score} de {qtd_questao} questões!</span> </Question_Text>
                                </Resultado_Section>
                                <Link_Item>
                                <MenuItemlink href='/start/nivelatual'>
                                    <h3>Praticar again? </h3>
                                </MenuItemlink>
                                </Link_Item>         
                            </ResultadoBox> 
                            )}
                    
                </Content>
            ) : (
                <Question_Section>
                        <Question_Count><span>Questão {atual + 1} </span> / {qtd_questao}
                        </Question_Count>
                        <Question_Text>Nivel: {Meudata[atual].nivel} = {Meudata[atual].pergunta}           
                        </Question_Text>
                        <Question_Text>
                        {Meudata[atual].fotoPergunta &&(
                                   <img src= {Meudata[atual].fotoPergunta} alt=""/> 
                                )}
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
export default ShowQuiz;