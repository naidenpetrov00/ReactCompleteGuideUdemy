import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../Error/Error";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameInputRef = useRef();
  const ageInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submithandler = (event) => {
    event.preventDefault();
    const userModel = {
      username: userNameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    if (userModel.username.trim().length < 3) {
      setIsValid(false);
      return;
    }
    if (userModel.age <= 0) {
      setIsValid(false);
      return;
    }

    props.onSubmit(userModel);
    userNameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setIsValid(true);
  };

  return (
    <React.Fragment>
      {!isValid && <Error onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form className={styles.form} onSubmit={submithandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={userNameInputRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
