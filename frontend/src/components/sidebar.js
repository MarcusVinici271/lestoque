import React from 'react';
import { useEffect, useState } from "react";   
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styles from './sidebar.module.css';

export default function Grafico() {
    const cores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const [post, setPost] = useState(null);

    const fetchData = async () => {
      axios.get('http://127.0.0.1:5000/api/list_estoque')
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

    if (!post || post.length === 0) {
        return <p>Carregando dados...</p>;
    }
  
    const top_produtos = post.sort((a, b) => b.quantidade - a.quantidade) .slice(0, 5);

    return (
        <>
        <h2 className={styles.titulo}>Quantidade</h2>
        <div className={styles.grafico}>
        
            <div>
        <PieChart width={400} height={400}>
            <Pie 
                data={top_produtos} 
                dataKey="quantidade"  // Certifique-se de que a API retorna essa chave
                nameKey="produto"       // Confirme se "nome" é o campo correto
                cx="50%" 
                cy="60%" 
                outerRadius={150} 
                fill="#8884d8" 
                label
                
            >
                {post.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend 
                layout="vertical"
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ top: 400 }}
            />
        </PieChart>
        </div>
        </div>
        </>
    );
}
