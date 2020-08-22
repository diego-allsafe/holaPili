//Crear un archivo con extension .js con el nombre de
//la funcion que llevara dentro -el nombre de la func. 
//recordar que va en mayusculas.

//1) Siempre primero importar a React from React
import React from 'react';

//2) Hacer la funcion con el mismo nombre del archivo
//Dentro de la lógica sencilla eventualmente podemos encontrar
//estructuras de control ( “if”) y seguramente varios métodos map
//para iterar arrays.

function Saludo(){
  return(
    <h1>¡Este es un Saludo Especial para Pili!</h1>
  );
}

//Los componentes ÚNICAMENTE
//pueden devolver 1 sólo elemento html.
//Dentro del return no puede haber etiquetas “hermanas”.

export default Saludo;
//3) Siempre al final hay que exportar el componente
//4) Paso siguiente es ir al archivo App.js para 
//hacer uso del archivo que acabamos de crear. 
