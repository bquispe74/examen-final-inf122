"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./pokeImage.module.css";

function pokeImage() {
    const [poke, setPoke] = useState("/vercel.svg")

    const url = "https://pokeapi.co/api/v2/pokemon-form/230/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPoke(poke.message)
            })
    }, [])

    return (
        <div className={style.imgPo}>
            <h1>Pokemon</h1>
            <Image src={poke} alt="pokemon" width={500} height={500}  />
        </div>
    );
}
export default pokeImage;