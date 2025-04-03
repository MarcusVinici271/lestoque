import styles from './padrao.module.css';
import Estoque from './estoque';
import Grafico from '../components/sidebar';
import React from "react";
import Menu from '../components/menu';



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