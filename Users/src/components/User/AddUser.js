import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../Error/Error";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [userModel, setUserModel] = useState({
    id: "",
    username: "",
    age: "",
  });

  const inputHandler = (event) => {
    const inputId = event.target.id;
    const inputData = event.target.value;
    setUserModel((prev) => {
      return {
        ...prev,
        id: Math.random().toString(),
        [inputId]: inputData,
      };
    });
  };

  const submithandler = (event) => {
    event.preventDefault();
    if (userModel.username.trim().length < 3) {
      setIsValid(false);
      return;
    }
    if (userModel.age <= 0) {
      setIsValid(false);
      return;
    }

    props.onSubmit(userModel);
  };

  const errorHandler = () => {
    setIsValid(true);
  };

  return (
    <div>
      {!isValid && <Error onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form className={styles.form} onSubmit={submithandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) => inputHandler(event)}
          ></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" onChange={inputHandler}></input>
          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
