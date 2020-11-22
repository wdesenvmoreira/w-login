import UsuarioEntrada from './UsuarioEntrada ';
import UsuarioSaida from './UsuarioSaida'; 
import React , { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';


function App() {

  const [isLogin, setLogin] = useState();

  useEffect(()=>{
    console.log('não da certo.')
  },[isLogin])

  return (
    

    <div className="App">
    
    <Container maxWidth="sm">
  <UsuarioEntrada />
  <UsuarioSaida login={isLogin}/>
  </Container>
     
  
    </div>
  );
}

export default App;