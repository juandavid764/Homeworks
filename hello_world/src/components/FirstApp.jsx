import { useState } from "react";
import styles from "./FirstApp.module.scss";

const FirstApp = ({ title, value = 0 }) => {
  const [contador, setContador] = useState(value);

  const handleSubstract = () => {
    setContador(contador - 1);
  };

  const handleAdd = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(value);
  };

  return (
    <div className={styles.container}> 
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>
        <span className={styles.counter}>{contador}</span>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles['button-subtract']}`}
            onClick={handleSubstract}
          >
            Substract
          </button>
          <button
            className={`${styles.button} ${styles['button-reset']}`}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className={`${styles.button} ${styles['button-add']}`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;