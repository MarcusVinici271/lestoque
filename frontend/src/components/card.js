import styles from './card.module.css';
import Button from './button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';



export default function Card({titulo, modulo}){
    const [nome, setNome] = useState('');
    const [serial, setSerial] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const { id } = useParams();
    const navigate = useNavigate(); 
       
    

    useEffect(() => {
        if(modulo === 'Alterar'){            
           axios.get(`http://127.0.0.1:5000/api/list_produto/${id}`).then((response) => {
            setNome(response.data.nome);
            setQuantidade(response.data.quantidade);
            setSerial(response.data.serial);
            setDescricao(response.data.descricao);
          });
        }
        }, [id]);


    const enviarDados = () => {        
        axios.post('http://127.0.0.1:5000/api/cadastrar_estoque', {
            nome: nome,
            quantidade: quantidade,
            serial: serial,
            descricao: descricao,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(response.data);
            alert('Dados enviados com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados.');
        });
    };
    
    const voltarHome = () => {
        navigate('/pages/home'); // Redireciona para a página inicial
      };

    const alterarProduto = async () => {
        console.log(id);
        try {
          const response = await axios.put(`http://127.0.0.1:5000/api/alterar_produto`, {
            id: id,
            nome: nome,
            quantidade: quantidade,
            serial: serial,
            descricao: descricao,
          });
          console.log('Produto alterado com sucesso:', response.data);
          alert('Produto alterado com sucesso!');
          navigate('/pages/home'); 
        } catch (error) {
          console.error('Erro ao alterar produto:', error);
          alert('Erro ao alterar produto.');
        }
      };

    return(
        <>
        <div className={styles.divcard}>
            <h2>{titulo}</h2>            
            <div className={styles.divform}>            
                {(modulo === 'Cadastrar' || modulo ==='Alterar') &&
                    (
                        <>                                        
                            <div className= {styles.divform1}>                        
                                <label>Produto</label>
                                <label>Quantidade</label>
                                <label>Serial</label>
                                <label >Descrição</label>
                            </div>
                            <div className={styles.divform2}>
                                <input type='text' name='nome' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                                <input type='number' name='quantidade' value={quantidade} onChange={(e) => setQuantidade(e.target.value)} /><br />
                                <input type='text' name='serial' value={serial} onChange={(e) => setSerial(e.target.value)} /><br />
                                <textarea className={styles.descricao} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                            </div>
                            <div className={styles.divbutton}>                            
                            {modulo === 'Cadastrar' &&(
                                <Button type='button' onClick={enviarDados} texto='Salvar' />
                            )}
                            {modulo === 'Alterar' &&(
                                <Button type='button' onClick={alterarProduto} texto='Alterar' />
                            )}
                                <Button type='button' texto='Cancelar' onClick={voltarHome} />
                            </div>
                        </>
                    )
                }       
                {modulo === 'Config' &&
                    (
                        <>
                        <div className= {styles.divform1}>                            
                                <label>Usuário</label>
                                <label>Senha</label>
                                <label >Nova Senha</label>
                            </div>
                            <div className= {styles.divform3}>
                                <input type='text'></input><br/>
                                <input type='text'></input><br/>
                                <input type='text'></input><br/>
                                <input type='text'></input><br/>
                                <Button type='button' onClick={enviarDados} texto='Salvar' />
                                <Button type='button' texto='Cancelar' onClick={voltarHome} />
                                
                        </div>
                        </>
                    )
                }
                </div>
           </div>
           </>
    )
}