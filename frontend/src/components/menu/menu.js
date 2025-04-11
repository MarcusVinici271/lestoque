import styles from '../css/menu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import lestoque from '../../assets/lestoque.png';
import React, {useState, useEffect }from "react";
import sair from '../../assets/sair.png';

export default function Menu(){
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUserName(userData.usuario.usuario);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/');
    };
    return(
        <div className={styles.divmenu}>
            <nav>
            <img className={styles.imgMenu} src={lestoque}></img>
            <Link to='/components/home' className={styles.link_menu} >Home</Link>
            <Link to='/components/cadastrar' className={styles.link_menu}>Cadastrar</Link>
            <Link to='/components/estoque' className={styles.link_menu} >Estoque</Link>
            <Link to='/components/movimentacao' className={styles.link_menu} >Configurações</Link>
            <div className={styles.userSection}>
                <span className={styles.userName}>Olá, {userName}</span>
                <a onClick={handleLogout}><img className={styles.imgMenu2} src={sair} /></a>
            </div>
                
            </nav>
        </div>
        
    );

}
