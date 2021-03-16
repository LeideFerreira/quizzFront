import React, { useState, useEffect } from 'react';
import { Container, Score_Section } from './styles';
import ContentHeader from '../../components/contentHeader';
import { useAuth } from '../../hooks/auth';
import { avaliacaoGET } from "../../hooks/service";

interface IntAvaliacao {
    user: {
        id: number,
        username: string,
    }
    area: {
        nome: string,
    }
    pontuacao: number,
}

const Avaliacao: React.FC = () => {
    const { user } = useAuth();
    const [avaliacao, setAvaliacao] = useState<IntAvaliacao[] | null>(null);

    useEffect(() => {
        async function fetchData() { //Tentar executar
            if (!user) {
                return <p>Cadê mo?</p>
            }
            const ava = await avaliacaoGET('/api/avaliacao/?id=', user.id);//pegar avaliacao de acordo com user atu     
            setAvaliacao(ava);

        }
        fetchData()
    }, [])

    return (
        <Container>
            <ContentHeader title="Avaliação" />
            {avaliacao ? (
                <Score_Section>
                    {/* <span>Sua Avaliacao {avaliacao.user}</span> */}
                    <p>Seu nível de 1 a 10 em   {avaliacao[0].area.nome} algébricas é: {avaliacao[0].pontuacao}</p>
                </Score_Section>
            ) : (
                    <p>Wait...</p>
                )
            }
        </Container>
    );
}

export default Avaliacao;
