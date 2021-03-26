import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from "../hooks/service";

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


interface QuizContextData{
    quiz: Quiz[] | undefined;
    //getQuiz(url:string): void;
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData);
const QuizProvider: React.FC = ({children}) =>{
    const [quiz, setQuiz] = useState<Quiz[] | undefined>(undefined);
  
     /*
        Essa useFetch pega todas as perguntas que estao no banco
        * Passos para selecionar as questões do usuário
            1 - Preciso inserir num dicionario somente as questões com nivel escolhido
            2 - Ao inserir no dicionario preciso selecionar aleatoriamente as questoes desse dicionario, so consulto o banco uma vez
    */
   
   
        const { data } = useFetch<Quiz[]>('/api/question/'); //#pegar dados da api 
        setQuiz(data);
   
    const state = {
        quiz,
    }

    return(
        <QuizContext.Provider value={state}>
            {children}
        </QuizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(QuizContext);
    return context;
}

export {QuizProvider,useQuiz};