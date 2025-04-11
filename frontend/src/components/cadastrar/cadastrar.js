import React from "react";
import styles from '../css/padrao.module.css';
import Card from '../card/card';
import { useLocation } from "react-router-dom";
import Menu from '../menu/menu';

export default function Cadastrar(){
    const location = useLocation();

    return(
        <>
        {location.pathname === '/components/cadastrar' && <Menu />}
        
        <div className={styles.allhome}>
        <Card titulo='Cadastro de Produto' modulo='Cadastrar'/>    
        </div>
        </>
    );
}


