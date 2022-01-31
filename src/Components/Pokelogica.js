import React,{useState,useEffect} from 'react';
import Tarjeta from './Tarjeta';
import "./Pokelogica.css";

const Pokemon = () => {

    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {

        const getPokemons = async () =>{
            
            for(let i = 0; i < 6 ;i++ ){
                let random = Math.round(Math.random() * 149);
                if(pokemons.length >= 1) return;
                let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);  
                let json = await res.json();
                  
                let pokeUno = {
                    id: json.order,
                    name: json.name,
                    sprite: json.sprites.front_default,
                }

                pokeUno.name = pokeUno.name.replace(pokeUno.name.charAt(0),pokeUno.name.charAt(0).toUpperCase());
                setPokemons((pokemons) => [...pokemons,pokeUno]);
              
            }

        }
        getPokemons();
      
    }, );

  return <>
            <div className ="contenedor-tarjetas">       
            {pokemons === 0 ? <h3>...Cargando</h3> : pokemons.map(el => 
            <Tarjeta key = {el.id} sprite={el.sprite} name= {el.name}/>
            )}
            </div>   
        </>;
};

export default Pokemon