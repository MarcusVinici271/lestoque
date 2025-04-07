import './login.css';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import lestoque from '../assets/lestoque.png'

export default function Login({ onLoginSuccess }) {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password ) {
            setErrorMessage("Preencha todos os campos.");
            return;

        } try{
            const response = await axios.post('http://127.0.0.1:5000/api/login', {
                usuario: username,
                senha: password
            });
            if (response.data.status === 'ok') {
                localStorage.setItem('token', response.data.token);
                const userData = {
                usuario: response.data.usuario.usuario, 
                };
                localStorage.setItem('userData', JSON.stringify(userData));
                onLoginSuccess();
                navigate('/pages/home');
            } else {
                setErrorMessage("Usuário ou senha incorretos.");
            }
        }catch (error) {
            console.error("Erro ao fazer login:", error);
            setErrorMessage("Erro ao fazer login. Tente novamente.");
        }
    }

    return(
        <>
        <div className="container">
        <div >
            
        </div>
        <div className="containerLogin">
            
                <img className="imgLogin"src={lestoque}/>
                {errorMessage && alert(errorMessage)}
                <div className='formLogin1'>
                <label htmlFor="username">Usuário:</label><br/>
                <input type="text" id="username" name="username" required />
                
                </div>
                <div className='formLogin2'>
                <label htmlFor="password">Senha:</label>
                <br/>
                <input type="password" id="password" name="password" required />
                </div >
                <Button texto= "Login" onClick={handleLogin}/>
            
        </div>
        </div>
        </>

    )
}