import React from 'react';
import { Container, Score_Section } from './styles';
import ContentHeader from '../../components/contentHeader';
import { useAuth } from '../../hooks/auth';
import { useAvaliacao } from '../../hooks/avaliacaoContext';

const Avaliacao: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return (<p>Wait user</p>);
    }

    return (
        <Container>
            <ContentHeader title="Avaliação" />
            <Score_Section>
                <span>Sua Avaliacao {user.username}</span>
                
                <p></p>
            </Score_Section>
        </Container>
    );
}

export default Avaliacao;
