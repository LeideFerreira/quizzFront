import styled from 'styled-components';

export const Container = styled.div`
`;

export const MenuItemlink = styled.a`
    display: flex;
    margin-top: 100px;
    justify-content: space-evenly;
    border-radius:25px;
    border: 5px solid;   
    color: ${props => props.theme.color.warning};
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
   
`;