import styles from '../css/padrao.module.css';
import Card from '../card/card';
import React from "react";
import Menu from '../menu/menu';


export default function Alterar(){


    return(
        <>
        <Menu />
        <div className={styles.allhome}> 
        <Card titulo='Alterar Produto' modulo='Alterar'/>    
        </div>
        </>
        

    );
}