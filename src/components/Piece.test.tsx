import { render, screen } from "@testing-library/react";
import Piece from "./Piece";

describe("Piece Component", () => {
  test("renders the component with correct props", () => {
    render(<Piece x={100} y={50} size={40} color="blue" />);

    const pieceElement = screen.getByTestId("piece");
    expect(pieceElement).toBeInTheDocument();
    expect(pieceElement).toHaveStyle("left: 100px");
    expect(pieceElement).toHaveStyle("top: 50px");
    expect(pieceElement).toHaveStyle("width: 40px");
    expect(pieceElement).toHaveStyle("height: 40px");
    expect(pieceElement).toHaveStyle("background: blue");
    expect(pieceElement).toHaveStyle("borderColor: blue");
  });

  it("renders the component with default color when no color prop is provided", () => {
    render(<Piece x={200} y={75} size={30} />);

    const pieceElement = screen.getByTestId("piece");
    expect(pieceElement).toHaveStyle("background: purple");
  });
});
