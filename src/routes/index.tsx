import React from 'react';
import AppRouter from './approuter';
import AuthRoutes from './authroutes';
import {useAuth} from '../hooks/auth';
import {BrowserRouter} from 'react-router-dom';

const Routes: React.FC = () =>{
    const { logged,user } = useAuth();
    console.log("Logado: ",logged,user);
    return (
        <BrowserRouter>
            {logged ? <AppRouter/> : <AuthRoutes/>}
        </BrowserRouter>
    ) 

}
export default Routes;