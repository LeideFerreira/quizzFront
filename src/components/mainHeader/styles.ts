import { profile } from 'console';
import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;
    background-color:${props => props.theme.color.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.color.gray};
`;

export const Profile = styled.div`
    display: flex;
    color: ${props => props.theme.color.white};
    flex-direction: column;
`;
export const Welcome = styled.h3``;
export const Username = styled.span``;
