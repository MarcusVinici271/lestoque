import styles from '../css/padrao.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import alterar from '../../assets/alterar.png'
import Excluir from '../excluir/excluir';
import React from "react";
import Menu from '../menu/menu';
import { useLocation } from 'react-router-dom';
import backend from '../../config';


export default function Estoque() {
  const [post, setPost] = useState(null);
  const location = useLocation();

  const fetchData = async () => {
    axios.get(`${backend}/api/list_estoque`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    } 
  useEffect(() => {
    fetchData();
  }, []);

  if(!post) 
    return ("carregando...") ; 


  return (
    <>
    {location.pathname === '/components/estoque' && <Menu />} 
    
    <div className={styles.containerEstoque}>
    <div className={styles.estoque}>
        <h1 className={styles.tituloEstoque}>Estoque</h1>
        <table>
            <thead className={styles.linhasTabela}>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Serial</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {post.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.produto}</td>
                        <td>{post.quantidade}</td>
                        <td>{post.serial}</td>
                        <td>{post.descricao}</td>
                        <td><Link to={{ pathname:`/components/alterar/${post.id}`}} className={styles.link_menu} ><img className={styles.imgEstoque} src={alterar}/></Link></td>
                        <td><Excluir id={post.id} /></td>
                        
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
    
    </div>

    </>
);

}
