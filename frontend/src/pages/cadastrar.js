import React from "react";
import styles from './padrao.module.css';
import Card from '../components/card';
import { useLocation } from "react-router-dom";
import Menu from '../components/menu';

export default function Cadastrar(){
    const location = useLocation();

    return(
        <>
        {location.pathname === '/pages/cadastrar' && <Menu />}
        
        <div className={styles.allhome}>
        <Card titulo='Cadastro de Produto' modulo='Cadastrar'/>    
        </div>
        </>
    );
}


