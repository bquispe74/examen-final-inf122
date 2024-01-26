import Image from "next/image";
import styles from "./page.module.css";
import pokeImage from "./components/pokeImage";

export default function Home() {
  return (
    <main className={styles.main}>
    <pokeImage />
    </main>
  );
}