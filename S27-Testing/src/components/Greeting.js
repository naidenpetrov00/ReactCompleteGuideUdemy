import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChagngedText] = useState(false);

  const changedTextHandler = () => {
    setChagngedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>ChangedText</Output>}
      <button onClick={changedTextHandler}></button>
    </div>
  );
};

export default Greeting;
