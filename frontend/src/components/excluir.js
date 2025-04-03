import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import excluir from '../assets/excluir.png';
import './excluir.css'

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Excluir({id}) {

  const [post, setPost] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  if(!post) return null; 


    const deletarProduto = async (id) => {
        console.log("Id:", id);
        const response = await fetch(`http://127.0.0.1:5000/api/deletar_produto/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            alert('Produto excluído com sucesso!');
            window.location.reload();
            fetchData();
        } else {
            alert('Erro ao excluir o produto.');
        }
    
    }

return (
  <div>
    <Button onClick={handleOpen}><img src={excluir} /></Button>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style2}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Excluir Produto
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Você tem certeza que deseja excluir o produto?
          </Typography><br/>
          <Button  className='custonButton' variant='contained' color='success' onClick={handleClose}>Voltar</Button>
          <Button  className='custonButton' variant='contained' color='error' onClick={() => deletarProduto(id)}>Excluir</Button>
          
        </Box>
      </Fade>
    </Modal>
  </div>
);

}