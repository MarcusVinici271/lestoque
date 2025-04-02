import styles from './menu.module.css';
import circle from '../assets/circle.png';
import { Link } from 'react-router-dom';
import leste from '../assets/leste.svg';
import React from "react";

export default function Menu(){
    return(
        <div className={styles.divmenu}>
            <nav>
            <img src={leste}></img>
            <Link to='/pages/home' className={styles.link_menu} >Home</Link>
            <Link to='/pages/cadastrar' className={styles.link_menu}>Cadastrar</Link>
            <Link to='/pages/estoque' className={styles.link_menu} >Estoque</Link>
            <Link to='/pages/config' className={styles.link_menu} >Configurações</Link>
            <a className={styles.link_menu}><img src={circle}/></a>
            </nav>
        </div>
        
    );

}
