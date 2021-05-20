import styled from 'styled-components';

interface ILegendProps {
    color: string;
}
export const Container = styled.div`
    flex-direction: column;
    width:100%;
    color: ${props => props.theme.color.info};
    background-color:${props => props.theme.color.secondary};
    margin: 10px 0;
    padding:30px 20px;
    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    flex:1;
    height:260px;
`;
// export const SideLeft = styled.div``;
export const LegendContainer = styled.ul`
    list-style:none;
    display:flex;
    padding-right:16px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;    
    margin-bottom: 7px;    
    margin-left: 16px;    
    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;        
        line-height: 40px;
        text-align: center;
    }
    > span {
        margin-left: 5px;
    }
`;
export const Header = styled.header`
    width:100%;
    display:flex;
    justify-content: space-between;
    > h2{
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;
// export const SideRight =styled.div``;