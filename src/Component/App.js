import UsuarioEntrada from './UsuarioEntrada ';
import UsuarioSaida from './UsuarioSaida'; 
import React , { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';


function App() {

 
  return (
    

    <div className="App">
    
    <Container maxWidth="sm">
  <UsuarioEntrada />
  <UsuarioSaida />
  </Container>
     
  
    </div>
  );
}

export default App;