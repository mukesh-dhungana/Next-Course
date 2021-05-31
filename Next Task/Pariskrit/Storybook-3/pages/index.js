import styles from "../styles/Home.module.css";
import { Block } from "../components/Block/Block";
import { useState } from "react";

export default function Home() {
  const blocks = ["Primary", "Secondary", "Medium", "Large"];

  return (
    <div className={styles.container}>
      {blocks.map((block) => (
        <Block id={block} text={block} />
      ))}
    </div>
  );
}
