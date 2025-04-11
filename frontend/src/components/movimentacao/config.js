import Card from '../card/card';
import React from "react";
import Menu from '../menu/menu';

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