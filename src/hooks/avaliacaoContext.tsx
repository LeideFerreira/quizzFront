import React, { createContext, useState, useContext, useEffect } from "react";
import { avaliacaoGET } from "../hooks/service";
import { useAuth } from '../hooks/auth';

interface IntAvaliacao {
    user: {
        id: number,
        username: string,
    }
    area: {
        nome: string,
    }
    nivel: string,
}

interface AvaliacaoContextData {
    avaliacao: IntAvaliacao[] | null;
    getAvaliacao(): void;
}

const AvaliacaoContext = createContext<AvaliacaoContextData>({} as AvaliacaoContextData);

const AvaliacaoProvider: React.FC = ({ children }) => {
    const { user } = useAuth();
    const [avaliacao, setAvaliacao] = useState<IntAvaliacao[] | null>(null);


    // useEffect(()=>{
    //     async function loadStoragedData() {
    //         const storagedAvaliacao = await localStorage.getItem('@AvaliacaoUser:avaliacao');
            
    //         if(storagedAvaliacao){
    //             setAvaliacao(JSON.parse(storagedAvaliacao));
    //         }
    //     }
    //     loadStoragedData()
    // })
    
    async function getAvaliacao() { //Tentar executar
        if (!user) {
            return <p>Cadê mo?</p>
        }
        console.log(user.id);
        const ava = await avaliacaoGET('/api/avaliacao/?id=', user.id);//pegar avaliacao de acordo com user atu     
        setAvaliacao(ava);
      //  await localStorage.setItem('@AvaliacaoUser:avaliacao',JSON.stringify(ava));
    }

    const state = {
        avaliacao,
        getAvaliacao,
    }

    return (
        <AvaliacaoContext.Provider value={state}>
            {children}
        </AvaliacaoContext.Provider>
    );
}

function useAvaliacao() {
    const context = useContext(AvaliacaoContext);

    return context;
}

export { AvaliacaoProvider, useAvaliacao };