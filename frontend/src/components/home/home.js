import styles from '../css/padrao.module.css';
import Estoque from '../estoque/estoque';
import Grafico from '../sidebar/sidebar';
import React from "react";
import Menu from '../menu/menu';



export default function Home() {
    return (
        <>
        
            <Menu />
            <div className={styles.allhome}>
            <div className={styles.sidebar}>
                <Grafico />
            </div>
            <div className={styles.center}>
                <Estoque/>   
            </div> 
        </div>
        </>
    );
}