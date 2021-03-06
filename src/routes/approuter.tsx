import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Avaliacao from '../pages/Avaliacao';
import Start from '../pages/Start';
import Principal from '../pages/Principal';
import { QuizzProvider } from '../hooks/quizzContext';


const AppRouter: React.FC = () => (
    <Layout>
        <BrowserRouter>
            <Switch>
                <QuizzProvider>
                    <Route path="/" exact component={Principal} />
                    <Route path="/principal" exact component={Principal} />
                    <Route path="/start" exact component={Start} />
                    <Route path="/avaliacao" exact component={Avaliacao} />
                </QuizzProvider>
            </Switch>
        </BrowserRouter>
    </Layout>

);

export default AppRouter;