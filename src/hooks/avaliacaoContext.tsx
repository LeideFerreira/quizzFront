import React, { createContext, useState, useContext, useEffect } from "react";
import { avaliacaoGET } from "./service";
import { useAuth } from '../hooks/auth';


interface Avaliacao{
    pontuacao: number;
    area: string;
}


interface AvaliacaoContextData{
    avaliacao: Avaliacao | null;
    avaliou(): void;

}

const AvaliacaoContext = createContext<AvaliacaoContextData>({} as AvaliacaoContextData);
    
const AvaliacaoProvider: React.FC = ({ children }) => {
    const {user} = useAuth();
    const [avaliacao,setAvaliacao] = useState<Avaliacao | null>(null); 

    async function avaliou() {
        if(!user){
            return <p>Wait User</p>
        }

        const ava = await avaliacaoGET('/api/avaliacao/?id=',user.id); //pegar avaliacao de acordo com user atu     
        setAvaliacao(ava);
    }


    return (
        <AvaliacaoContext.Provider value={{avaliacao,avaliou}}>
          {children}
        </AvaliacaoContext.Provider>
      );
}

function useAvaliacao() {
    const context = useContext(AvaliacaoContext);
    return context;
  }
  
export {AvaliacaoProvider,useAvaliacao}