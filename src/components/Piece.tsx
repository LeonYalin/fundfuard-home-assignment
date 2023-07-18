import React from "react";

type Props = {
  x: number;
  y: number;
};

export default function Piece(props: Props) {
  const { x, y } = props;
  return <div id="piece" className="circle" style={{ left: x, top: y }}></div>;
}
