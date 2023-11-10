import { render } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World", () => {
  render(<Greeting />);
});
