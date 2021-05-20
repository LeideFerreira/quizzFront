import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Avaliacao from '../pages/Avaliacao';
import Start from '../pages/Start';
import Principal from '../pages/Principal';


const AppRouter: React.FC = () => (
    <Layout>
        <BrowserRouter>
            <Switch>    
                    <Route path="/" exact component={Principal} />
                    <Route path="/principal" exact component={Principal} />
                    <Route path="/start/nivelatual" render= {props=> <Start  aleatorio={false} />} />
                    <Route path="/start/nivelaleatorio" render= {props=> <Start  aleatorio={true} />} />
                    <Route path="/start" exact component={Start} />
                    <Route path="/avaliacao" exact component={Avaliacao} />
            </Switch>
        </BrowserRouter>
    </Layout>

);

export default AppRouter;