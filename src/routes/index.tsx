import React,{useContext} from 'react';
import AppRouter from './approuter';
import AuthRoutes from './authroutes';
import {useAuth} from '../hooks/auth';
import {BrowserRouter} from 'react-router-dom';

const Routes: React.FC = () =>{
    const { logged } = useAuth();
    return (
        <BrowserRouter>
            {/* {logged? <AppRouter/> : <AuthRoutes/>} */}
            {/* <AppRouter/> */}
            <AuthRoutes/>
        </BrowserRouter>
    ) 

}
export default Routes;