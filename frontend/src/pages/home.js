import styles from './padrao.module.css';
import Estoque from './estoque';
import Grafico from '../components/sidebar';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../components/menu';
import Config from './config';
import Cadastrar from './cadastrar';
import Alterar from './alterar';
import Estoque from './estoque';

export default function Home(){
    return(
        
        <div className={styles.allhome}>
            <BrowserRouter>
          <Menu/>
          <Routes>
              <Route index  element={<Home />}></Route>
              <Route path='/pages/home' element={<Home />}></Route>
              <Route path='/pages/config' element={<Config />}></Route>
              <Route path='/pages/cadastrar' element={<Cadastrar />}></Route>
              <Route path='/pages/alterar/:id' element={<Alterar />}></Route>
              <Route path='/pages/estoque' element={<Estoque />}></Route> 
          </Routes>
        </BrowserRouter>
            <div className={styles.sidebar}>
             <Grafico/>   
        </div>
            <div className={styles.center}>
            <Estoque/>
        </div>
            
        </div>
        
    );
}
