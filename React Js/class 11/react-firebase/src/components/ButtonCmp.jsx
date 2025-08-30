import styles from "./button.module.css";

const ButtonCmp = ({ title, style , onClick }) => {
    console.log("onClick" , onClick)
  return (
    <button onClick={onClick} className={styles.btn} style={{...style}}>
      {title || "Button"}
    </button>
  );
};

export default ButtonCmp;
