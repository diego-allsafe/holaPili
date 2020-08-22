import React from 'react';
import logo from './logo.svg';
import './App.css';

import Saludo from '../src/component/saludo';
//En el archivo App.js importamos el componente Saludo.
//Luego lo implementamos como si fuese una etiqueta 
//de HTML dentro de la estructura del return del
//componente App. No olvidar poner una barra (/) 
//al final para cerrar la etiqueta.



function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Saludo/>        
      </header>
    </div>
  );
}

export default App;
