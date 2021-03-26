import React,{useEffect} from 'react';
import { Container, Score_Section } from './styles';
import ContentHeader from '../../components/contentHeader';
import { useAuth } from '../../hooks/auth';
import { useAvaliacao } from '../../hooks/avaliacaoContext';

const Avaliacao: React.FC = () => {
    const {avaliacao,getAvaliacao} = useAvaliacao();

    useEffect(()=>{
        getAvaliacao()
    },[])

    return (
        <Container>
            <ContentHeader title="Avaliação" />
            {avaliacao ? (
                <Score_Section>
                    {/* <span>Sua Avaliacao {avaliacao.user}</span> */}
                    <p>Seu nível de 1 a 10 em   {avaliacao[0].area.nome} algébricas é: {avaliacao[0].nivel}</p>
                </Score_Section>
            ) : (
                    <p>Wait...tá sem</p>
                )
            }
        </Container>
    );
}

export default Avaliacao;
