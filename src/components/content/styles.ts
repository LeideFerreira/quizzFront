import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.primary};
    padding: 25px;
    height: calc(100vh - 70px);
    overflow-y: scroll;//tudo que nao couber nao mostra e manda uma rolagem
`;