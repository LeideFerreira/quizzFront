import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Answer = styled.div`   
    >button{
        width: 100%;
        font-size: 16px;
        color: ${props => props.theme.color.white};
        background-color:${props => props.theme.color.primary};
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
    margin-top: 30px;
   
`;

export const Answer_correta = styled.div`  
    color: ${props => props.theme.color.success};
    margin-top:12px;
    margin-bottom:12px;

`;
export const Answer_errada = styled.div`
    color: ${props => props.theme.color.warning};   
`;
export const Resultado_Section = styled.div`
    margin-top: 10px;
    border-radius:5px;
    border: 1px solid ${props => props.theme.color.white};
        cursor: pointer;
        >span{
        font-size: 20px;
    }
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

export const Resolucao = styled.div`
    color: ${props => props.theme.color.white};
    margin-top:12px;
    margin-bottom:12px;
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
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    flex-wrap: wrap; 
`;
