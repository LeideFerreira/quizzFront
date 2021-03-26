import styled from 'styled-components';

export const Container = styled.div`
    
`;
export const Div_Section = styled.div`
    display: inline-flex;
    width: 100%;
    align-items: baseline;
    margin-top: 50px;
    justify-content: space-evenly;
`;

export const MenuItemlink = styled.a`
    color: ${props => props.theme.color.warning};
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
   
`;