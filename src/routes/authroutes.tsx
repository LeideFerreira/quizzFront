import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () =>(
    <BrowserRouter>
      <Switch>
            <Route path="/" component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
        </Switch>
    </BrowserRouter>
      
);
export default AuthRoutes;