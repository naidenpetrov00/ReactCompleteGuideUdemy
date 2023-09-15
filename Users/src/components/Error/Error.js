import React from "react";
import ReactDom from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Error.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
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
  );
};

const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay onClick={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Error;
