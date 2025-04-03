import styles from './padrao.module.css';
import Card from '../components/card';
import Button from '../components/button';
import React from "react";
import Menu from '../components/menu';

export default function Config(){
    return(
        <>
        <Menu/>
        <div>
        <Card titulo='Configurações' modulo='Config'/>
        </div>
        </>
    );
}