import React, {ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //essa interface recebe atributos de um html


const Button: React.FC<ButtonProps> = ({ ...rest }) =>{
    return (
        <Container {...rest} />
    );
}

export default Button;
