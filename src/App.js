import Pokemon from './Components/Pokelogica';
import React, { useState } from 'react';
import Footer from './Components/Footer';
import "./index.css"

function App() {

  const [mostrar,setMostrar] = useState(false);

  return (
      <div className='main'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo Pokemon"/>
        <h1>¿Con que Pokemons te enfrentaras al alto mando?</h1>
        <p>Solo la suerte dirá</p>
        <button className="cta-invoke" onClick={() => setMostrar(true)}>Invocar!</button>
        {mostrar && <Pokemon/>}
        <Footer/>
      </div>
  );
}

export default App;
