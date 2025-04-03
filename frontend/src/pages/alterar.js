import styles from './padrao.module.css';
import Card from '../components/card';
import React from "react";
import Menu from '../components/menu';


export default function Alterar(){


    return(
        <>
        <Menu />
        <div>
        <Card titulo='Alterar Produto' modulo='Alterar'/>    
        </div>
        </>
        

    );
}