import React from "react";

type Props = {
  moveDelta: (dx: number, dy: number) => void;
};

export default function Controls(props: Props) {
  const { moveDelta } = props;
  return (
    <div id="controls-wrapper">
      <button id="btn-up" className="btn-arrow" onClick={() => moveDelta(0, -100)}>
        U
      </button>
      <br />
      <button
        id="btn-left"
        className="btn-arrow"
        onClick={() => moveDelta(-100, 0)}
      >
        L
      </button>
      <button
        id="btn-right"
        className="btn-arrow"
        onClick={() => moveDelta(100, -0)}
      >
        R
      </button>
      <br />
      <button id="btn-down" className="btn-arrow" onClick={() => moveDelta(0, 100)}>
        D
      </button>
    </div>
  );
}
