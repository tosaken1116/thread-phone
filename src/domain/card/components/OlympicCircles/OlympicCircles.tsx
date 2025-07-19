import React from "react";
import styles from "./style.module.css";

interface OlympicCirclesProps {
  overrideColor?: string;
  scale?: number;
}

export const OlympicCircles: React.FC<OlympicCirclesProps> = (props) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(${props.scale})`,
      }}
    >
      <ul
        className={`${styles.rings} ${
          props.overrideColor && styles.overrideColor
        }`}
        style={
          props.overrideColor
            ? { ["--ring-color" as any]: props.overrideColor }
            : undefined
        }
      >
        <li className={styles.blue}></li>
        <li className={styles.blue + " " + styles.chain}></li>
        <li className={styles.yellow}></li>
        <li className={styles.yellow + " " + styles.chain}></li>
        <li className={styles.black}></li>
        <li className={styles.green}></li>
        <li className={styles.green + " " + styles.chain}></li>
        <li className={styles.red}></li>
        <li className={styles.red + " " + styles.chain}></li>
      </ul>
    </div>
  );
};
