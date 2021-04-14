import React from 'react';
import { Container, Score_Section } from './styles';
import ContentHeader from '../../components/contentHeader';
import { useAuth } from '../../hooks/auth';

const Avaliacao: React.FC = () => {
    const {user,atualizaAvaliacao} = useAuth();

    return (
        <Container>
            <ContentHeader title="Avaliação" />
            {user ? (
                <Score_Section>
                    {/* <span>Sua Avaliacao {avaliacao.user}</span> */}
                    <p> Olá, {user.username} seu nível em Expressões Algebricas é {user.nivel}</p>
                </Score_Section>
            ) : (
                    <p>Wait...tá sem</p>
                )
            }
        </Container>
    );
}

export default Avaliacao;
