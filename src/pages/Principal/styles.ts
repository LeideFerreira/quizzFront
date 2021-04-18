import styled from 'styled-components';

export const Container = styled.div` 
`;
export const Content = styled.div`
    margin-top:20px;
    margin-left:200px;

    img{
        width: 40px;
        margin-left:10px;
    }

   
`;
export const Div_Section = styled.div`
    margin-top:20px;
    margin-left:100px;

    width:25%;
    border-radius: 20px;
    padding:10px;
    border: 2px solid ${props => props.theme.color.black};
        cursor: pointer;
        background-color:${props => props.theme.color.warning};

`;

export const MenuItemlink = styled.a`
    color:${props => props.theme.color.white};
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
   
`;