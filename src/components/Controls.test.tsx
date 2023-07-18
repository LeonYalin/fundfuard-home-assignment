import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

describe("Controls Component", () => {
  test("renders the component with buttons and action buttons", () => {
    const onMove = jest.fn();
    const onReset = jest.fn();
    const onRandomize = jest.fn();

    render(
      <Controls onMove={onMove} onReset={onReset} onRandomize={onRandomize} />
    );

    const btnUp = screen.getByText("U");
    const btnLeft = screen.getByText("L");
    const btnRight = screen.getByText("R");
    const btnDown = screen.getByText("D");
    const btnReset = screen.getByText("Reset");
    const btnRandomize = screen.getByText("Randomize");

    expect(btnUp).toBeInTheDocument();
    expect(btnLeft).toBeInTheDocument();
    expect(btnRight).toBeInTheDocument();
    expect(btnDown).toBeInTheDocument();
    expect(btnReset).toBeInTheDocument();
    expect(btnRandomize).toBeInTheDocument();
  });

  test("calls the onMove function with correct arguments when arrow buttons are clicked", () => {
    const onMove = jest.fn();
    const onReset = jest.fn();
    const onRandomize = jest.fn();

    render(
      <Controls onMove={onMove} onReset={onReset} onRandomize={onRandomize} />
    );

    const btnUp = screen.getByTestId("btn-up");
    const btnLeft = screen.getByTestId("btn-left");
    const btnRight = screen.getByTestId("btn-right");
    const btnDown = screen.getByTestId("btn-down");

    fireEvent.click(btnUp);
    fireEvent.click(btnLeft);
    fireEvent.click(btnRight);
    fireEvent.click(btnDown);

    expect(onMove).toHaveBeenCalledWith(0, -100);
    expect(onMove).toHaveBeenCalledTimes(4);
    expect(onMove).toHaveBeenCalledWith(-100, 0);
    expect(onMove).toHaveBeenCalledWith(100, -0);
    expect(onMove).toHaveBeenCalledWith(0, 100);
  });

  test("calls the onReset and onRandomize functions when action buttons are clicked", () => {
    const onMove = jest.fn();
    const onReset = jest.fn();
    const onRandomize = jest.fn();

    render(
      <Controls onMove={onMove} onReset={onReset} onRandomize={onRandomize} />
    );

    const btnReset = screen.getByText("Reset");
    const btnRandomize = screen.getByText("Randomize");

    fireEvent.click(btnReset);
    fireEvent.click(btnRandomize);

    expect(onReset).toHaveBeenCalledTimes(1);
    expect(onRandomize).toHaveBeenCalledTimes(1);
  });
});
