import React, { createContext, useState, useContext, useEffect} from "react";

interface QuizzContextData {
    Situacao(score: number): void;
    situacao: string;
}


const QuizzContext = createContext<QuizzContextData>({} as QuizzContextData);

const QuizzProvider: React.FC = ({ children }) => {
    const [situacao, setSituacao] = useState("Bom");

    function Situacao(score: number) {
        if (score > 5) {
            setSituacao('Excelente');
        } else {
            setSituacao('Ruim');
        }
    }



  
    
    const state = {
        situacao,
        Situacao,
    }

    return (
        <QuizzContext.Provider value={state}>
            {children}
        </QuizzContext.Provider>
    );
}

function useQuizz() {
    const context = useContext(QuizzContext);

    return context;
}

export { QuizzProvider, useQuizz };