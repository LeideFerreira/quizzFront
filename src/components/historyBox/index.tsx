import React from 'react';

import { Container, ChartContainer,Header,Legend,LegendContainer } from './styles';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';


interface IHistoryBoxProps {
    data: {
        id: number,
        pontFacil: number,
        pontMedia: number,
        pontDificil: number,
        user: number,
    }[],
    lineColorpontFacil: string,
    lineColorpontMedia: string,
    lineColorpontDificil: string,

}
const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorpontFacil, lineColorpontMedia, lineColorpontDificil
}) => {
    return (
        <Container>
            <Header>
            <h2>Últimas rodadas do usuário e pontuação obtida em cada nível</h2>
                <LegendContainer>
                    <Legend color={lineColorpontFacil}>
                        <div></div>
                        <span>Nível Fácil</span>
                    </Legend>
                    <Legend color={lineColorpontMedia}>
                    <div></div>
                        <span>Nível Médio</span>
                    </Legend>
                    <Legend color={lineColorpontDificil}>
                    <div></div>
                        <span>Nível Dificil</span>
                    </Legend>
                </LegendContainer>
            </Header>
            
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="id" stroke="#cecece" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            name="facil"
                            dataKey="pontFacil"
                            stroke={lineColorpontFacil}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            name="medio"
                            dataKey="pontMedia"
                            stroke={lineColorpontMedia}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            name="dificil"
                            dataKey="pontDificil"
                            stroke={lineColorpontDificil}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />

                    </LineChart>
                </ResponsiveContainer>

            </ChartContainer>

        </Container>
    )
}

export default HistoryBox;