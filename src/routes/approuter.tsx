import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Avaliacao from '../pages/Avaliacao';
import Start from '../pages/Start';
import Principal from '../pages/Principal';
import QuizzNivelAtual from '../pages/QuizzNivelAtual';
import QuizzNivelAleatorio from '../pages/QuizzNivelAleatorio';


const AppRouter: React.FC = () => (
    <Layout>
        <BrowserRouter>
            <Switch>         
                    <Route path="/" exact component={Principal} />
                    <Route path="/principal" exact component={Principal} />
                    <Route path="/start/nivelatual" exact component={QuizzNivelAtual} />
                    <Route path="/start/nivelaleatorio" exact component={QuizzNivelAleatorio} />
                    <Route path="/start" exact component={Start} />
                    <Route path="/avaliacao" exact component={Avaliacao} />
            </Switch>
        </BrowserRouter>
    </Layout>

);

export default AppRouter;