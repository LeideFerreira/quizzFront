import styled from 'styled-components';

export const Container = styled.div`
    width:48%;
    margin: 10px 0;
    h2{
        color: ${props=>props.theme.color.info};
    }
   
    background-color: ${props =>props.theme.color.tertiary};
    border-radius: 7px;
    padding:30px 20px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: calc(100vh - 70px);
    overflow-y: scroll;//tudo que nao couber nao mostra e manda uma rolagem
`;
// export const SideLeft = styled.div``;
// export const LegendContainer = styled.div``;
// export const Legend=styled.div``;
// export const SideRight =styled.div``;