import React, {InputHTMLAttributes} from 'react';
import {Container} from './styles';

type IIpuntProps = InputHTMLAttributes<HTMLInputElement>; //essa interface recebe atributos de um html


const Input: React.FC<IIpuntProps> = ({ ...rest }) =>{
    return (
        <Container {...rest} />
    );
}

export default Input;
