import styled from 'styled-components';

export const Container = styled.div``;
export const Title = styled.div`
    >h1{
        color: ${props => props.theme.color.white};
        &::after{
            content: '';
            display: block;
            width:55px;
            border-bottom: 10px solid ${props => props.theme.color.warning};
        }
    }
`;
export const Controllers = styled.h1``;
