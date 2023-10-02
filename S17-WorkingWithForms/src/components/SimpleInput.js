import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name not valid");
    }
  }, [nameIsValid]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    console.log(name + " state");
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue + " ref");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
        />
        {!nameIsValid && <p>Name mustnot be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
