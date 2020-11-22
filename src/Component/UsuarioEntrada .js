import React , { useState, useEffect } from 'react'

function UsuarioEntrada(props) {
  const [isLogin, setLogin] = useState('');


  useEffect(()=>{
    document.getElementById('saida').innerHTML = isLogin
  },[isLogin])


function handlechangeLogin(event){
          setLogin(event.target.value);
           event.preventDefault();
           
      }
    return (
      <div className="">
          Login: <input type='text' className="" onChange={handlechangeLogin}/>
      </div>
    );
  }
  
  export default UsuarioEntrada;