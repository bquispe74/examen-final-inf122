import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./componentes/pokemon";
export default function Home() {
  return (
    <main className={styles.main}>
      
      <Pokedex/>
    
    </main>
  );
}