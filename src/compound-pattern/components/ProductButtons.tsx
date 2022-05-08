import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus}> - </button>
      <div className={styles.countLabel}> 0 </div>
      <button className={styles.buttonAdd}> + </button>
    </div>
  );
};
