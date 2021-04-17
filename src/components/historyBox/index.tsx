import React from 'react';
import { Container} from './styles';
import{
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
}from 'recharts';

interface IHistoryBoxProps{
    data:{
        id:number,
        pontFacil:number,
        pontMedia:number,
        pontDificil:number,
    }[],
    lineColorpontFacil:string,
    lineColorpontMedia:string,
    lineColorpontDificil:string,
     
}
const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data,lineColorpontFacil,lineColorpontMedia,lineColorpontDificil
}) => {
    return (
        <Container>   
                <h2>Ola, eu sou o seu history</h2>
          <ResponsiveContainer>
              <LineChart data={data} margin={{top: 5, right: 20,left:20,bottom:5}}>
                  <CartesianGrid  strokeDasharray="3 3" stroke="#cecece"/>
                  <XAxis dataKey= "id"stroke="#cecece"/>
                  <Tooltip />
                  <Line 
                  type="monotone" 
                  name="Facil"
                  dataKey="pontFacil"
                  stroke={lineColorpontFacil}
                  strokeWidth={5}
                  dot = {{r:5}}
                  activeDot={{r:8}}
                  />
                  <Line 
                  type="monotone" 
                  name="Medio"
                  dataKey="pontMedia"
                  stroke={lineColorpontMedia}
                  strokeWidth={5}
                  dot = {{r:5}}
                  activeDot={{r:8}}
                  />
                   <Line 
                  type="monotone" 
                  name="Dificil"
                  dataKey="pontDificil"
                  stroke={lineColorpontDificil}
                  strokeWidth={5}
                  dot = {{r:5}}
                  activeDot={{r:8}}
                  />
                 
              </LineChart>
          </ResponsiveContainer>

        </Container>
    )
}

export default HistoryBox;