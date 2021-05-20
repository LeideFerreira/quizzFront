import React from 'react';
import { Container } from './styles';
import ShowQuiz from '../Quiz';
import { useFetch } from "../../hooks/service";
import { useAuth } from '../../hooks/auth';


interface Quizz {
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

interface Props{
    aleatorio: boolean; //para verificar se vai ser um nivel aleatorio ou atual
}

const Start: React.FC<Props> = ({aleatorio}) =>{
    const {data} = useFetch<Quizz[]>('/api/question');
    const { user} = useAuth();

    var data_aux = [];
    var i,cont_aux = 0, ava = user?.nivel;

    if (!data) { //verificar se existe data e avaliacao
        return (<p>Carregando...</p>)
    }

    //Caso seja uma rodada avaliativa 
    // Variaveis para utilizar nas selecoes de questoes
    //Buscar somente questaos do nivel atual do usuario

    for (i = 0; i < data.length; i++){
        if(data[i].nivel == ava){// se o nivel da questao for igual ao nivel do usuario
            data_aux[cont_aux] = data[i];
            cont_aux++; //Se for igual acrescento o  contador dele
        }
    }
    var Meudata = data_aux;

    return (
        <Container>
            {aleatorio?(
                <ShowQuiz quiz={data} aleatorio={aleatorio}/>//mando o objeto com valores aleatorio
            ):(
                <ShowQuiz quiz={Meudata} aleatorio={aleatorio} />//mando o objeto com valores filtrados pelo nivel atual
            )}
            
        </Container>
    );
}
export default Start;