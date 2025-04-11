import styles from '../css/button.module.css'
import React from "react";

export default function Button({texto, onClick}){
    
   

    return(
        <div>
             <button className={styles.botao} onClick={onClick}>{texto}</button> 
        </div>
    )
}
