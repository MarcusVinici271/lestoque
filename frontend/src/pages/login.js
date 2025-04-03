import './login.css';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const handleLogin = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" && password === "") {
            alert("Login bem-sucedido!");
            navigate ('/pages/home');
        } else {
            alert("Nome de usuário ou senha incorretos.");
            window.location.reload()
        }
    }

    return(
        <>
        <div className="container">
        <div >
            
        </div>
        <div className="containerLogin">
            
                <h1>Lestoque</h1>
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