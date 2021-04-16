import React from 'react';

import { Container,SideLeft,LegendContainer,SideRight,Legend} from './styles';
import { Pie, ResponsiveContainer, Cell } from 'recharts';

const PieChart: React.FC = () => {
    return (
        <Container>
            {/* {children} */}
            <SideLeft>
                <LegendContainer>
                    <Legend>
                        <legend>
                        <div>5%</div>
                        <span>Entrada</span>
                        </legend>
                    </Legend>
                    <Legend>
                        <legend>
                        <div>95%</div>
                        <span>Saidas</span>
                        </legend>
                    </Legend>
                    
                </LegendContainer>
            </SideLeft>
            {/* <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                        data={[{amout:30,percent:95}]}
                        labelLine={false}
                        dataKey="percent"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </SideRight> */}

        </Container>
    )
}

export default PieChart;