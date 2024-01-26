'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './pokemon.module.css';
function Pokedex(){
    
    const[pokemon,setPokemon]=useState("./vercel.svg");
    const url="https://pokeapi.co/api/v2/pokemon/55";
    const[nombre,setNombre]=useState("");
    const[habilidades,setHabilidades]=useState("");
    const[statList,setStatsList]=useState("");
    const[number,setNumber]=useState("");
    const[tipo,setTipo]=useState("");
    const[altura,setAltura]=useState(0);
    const[peso,setPeso]=useState(0);
    
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setNombre(data.name),
            setNumber(data.id),
            setTipo(data.types[0].type.name),
            setAltura(data.height),
            setPeso(data.weight),
            setHabilidades(data.abilities[0].ability.name)
            setTipo(data.types[0].type.name);
            const statsElements = data.stats.map((stat, index) => (
                <div key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </div>
              ));
      
            setStatsList(statsElements);
              
            
            
            
        })


    },[])

    return(

        <div className={style.contenedor}>
            
            <h1 className={style.titulo}>My Pokemon</h1>
            <div className={style.nombre}>{nombre.charAt(0).toUpperCase()+nombre.slice(1)}</div>
            <div className={style.number}>#00{number}</div>
            <Image src={pokemon} width={250} height={250}></Image>
            
            <h1 className={style.abouttitulo}>About</h1>
                <hr className={style.barra}></hr>
                <div>
                <div className={style.tipo}>Type:  {tipo} </div>
                <div className={style.altura}>Weight: {altura/10} m</div>
                <div className={style.peso}>Height: {      peso/10}kg</div>
                <div className={style.habilidades}>Abilities: {habilidades}</div>
                </div>
                
                <h1 className={style.stats}> Stats</h1>
                <div className={style.statList}>{statList}</div>

            

        </div>

    );
}export default Pokedex