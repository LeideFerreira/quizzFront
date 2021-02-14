import React, { useMemo } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/contentHeader';
import ShowQuizz from '../Quizz';

const Start: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Quizz"/>
            <ShowQuizz/>
        </Container>
    );
}
export default Start;