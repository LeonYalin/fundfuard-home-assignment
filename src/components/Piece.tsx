import React from "react";
import "./Piece.css";

type Props = {
  x: number;
  y: number;
  size: number;
  color?: string;
};

export default function Piece(props: Props) {
  return (
    <div
      id="piece"
      data-testid="piece"
      className="circle"
      style={{
        left: props.x,
        top: props.y,
        width: props.size,
        height: props.size,
        background: props.color || "purple",
        borderColor: props.color,
      }}
    ></div>
  );
}
