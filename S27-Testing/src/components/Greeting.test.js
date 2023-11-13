import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    render(<Greeting />);

    const element = screen.getByText("Hello World!");
    expect(element).toBeInTheDocument();
  });

  test("renders It's good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const element = screen.getByText("good to see you", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("render ChangedText if the button clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const element = screen.getByText("ChangedText");
    expect(element).toBeInTheDocument();
  });

  test("DOES NOT render good to see you if the button clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const element = screen.queryByText("good to see you", { exact: false });
    console.log(element);
    expect(element).toBeNull();
  });
});
