import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;
`;

export const Answer = styled.div`   
    >button{
        width: 100%;
        font-size: 16px;
        color: ${props => props.theme.color.white};
        background-color:${props => props.theme.color.primary}; ;
        border-radius: 15px;
        padding: 5px;
        align-items: center;
        border: 2px solid ${props => props.theme.color.warning};
        cursor: pointer;
        
        &:hover{
            opacity: .7;
            transform: translateX(10px);
        }
    }
`;

export const Question_Section = styled.div`

`;


export const Question_Count = styled.div`
    margin-bottom: 20px;
    >span{
        font-size: 28px;
    }
`;
export const Question_Text = styled.div`
  margin-bottom: 12px;
`;
export const Score_Section = styled.div`
    >span{
        font-size: 20px;
    }
`;
export const MenuItemlink = styled.a`
    color: ${props => props.theme.color.warning};
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
   
`;
