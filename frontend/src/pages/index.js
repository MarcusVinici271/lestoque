import styles from './padrao.module.css';
import Estoque from './estoque';
import Grafico from '../components/sidebar';
import React, { useEffect } from "react";
import Menu from '../components/menu';
import { Outlet, useLocation } from 'react-router-dom';
import Cadastrar from './cadastrar';
import Home from './home';



export default function Index() {
    const location = useLocation();
    let content;
    
    useEffect(() => {
        console.log(location);
    }, [location.pathname]);

    switch (location.pathname) {
        case '/':
            content = <Home />;
            break;
        case '/pages/cadastrar':
            content = <Cadastrar />;
            break;
        default:
            content = <Home />; 
            break;
    }

    return (
        <>
        
            <Menu />

             {content}
        </>
    );
}