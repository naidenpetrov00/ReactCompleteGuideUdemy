import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Error.module.css";

function Error(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={styles.content}>
          <p>Please enter valid name and age</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Error;
