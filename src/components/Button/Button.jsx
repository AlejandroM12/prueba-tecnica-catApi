import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <div className={styles.buttonLine}></div>
      <div className={styles.buttonLine}></div>
      <span className={styles.buttonText}>GET NEW FACT</span>
      <div className={styles.buttonDrow1}></div>
      <div className={styles.buttonDrow2}></div>
    </button>
  );
};

export default Button;
