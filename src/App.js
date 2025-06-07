import './App.css';
import React from 'react';
import Perfiles from './Componentes/Perfiles';
import gato1 from './Img/gato1.jpg';
import gato2 from './Img/gato2.jpg';
import gato3 from './Img/gato3.jpg';

function App() {
  return (
    <div className="App">
      <Perfiles 
      nombre="Bigotes McMiau"
      trabajo="Inspector de rincones oscuros, Probador oficial de cajas, Despertador felino"
      habilidades ="Dormir en cualquier lugar, Cazar ratones de juguete, Supervisar siestas humanas"
      imgURL={gato1} 
      estilos={{backgroundColor: '#F5CCB3', padding: '40px', borderRadius: '10px'}}
      />
      <Perfiles 
      nombre="Don Ronroneo"
      trabajo="Terapeuta de ronroneos, Supervisor de teclado, Calentador de piernas"
      habilidades ="Ronronear a frecuencias óptimas, Proporcionar calor en invierno, Supervisar siestas ajenas"
      imgURL={gato2} 
      estilos={{backgroundColor: '#CEE6D5', padding: '40px', borderRadius: '10px'}}
      />
      <Perfiles 
      nombre="Gatástrofe"
      trabajo="Derribador profesional de objetos, Redecorador de cortinas, Cazador de cosas invisibles"
      habilidades ="Derribar objetos con precisión, Redecorar el hogar con estilo, Cazar sombras y luces"
      imgURL={gato3} 
      estilos={{backgroundColor: '#AAB0C6', padding: '40px', borderRadius: '10px'}}
      />


    </div>
  );
}

export default App;
