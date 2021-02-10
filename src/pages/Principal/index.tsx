import React, { useState } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/contentHeader';
import ShowQuizz from '../Quizz/';

const Principal: React.FC = () => {
    return (
        <Container>
            <ContentHeader/>
            <ShowQuizz/>
        </Container>
    );
}
export default Principal;