import React from "react";
import "./Controls.css";

type Props = {
  onMove: (dx: number, dy: number) => void;
  onReset: () => void;
  onRandomize: () => void;
};

export default function Controls(props: Props) {
  return (
    <>
      <div id="controls-wrapper">
        <button
          id="btn-up"
          data-testid="btn-up"
          className="btn-arrow"
          onClick={() => props.onMove(0, -100)}
        >
          U
        </button>
        <br />
        <button
          id="btn-left"
          data-testid="btn-left"
          className="btn-arrow"
          onClick={() => props.onMove(-100, 0)}
        >
          L
        </button>
        <button
          id="btn-right"
          data-testid="btn-right"
          className="btn-arrow"
          onClick={() => props.onMove(100, -0)}
        >
          R
        </button>
        <br />
        <button
          id="btn-down"
          data-testid="btn-down"
          className="btn-arrow"
          onClick={() => props.onMove(0, 100)}
        >
          D
        </button>
        <div id="action-buttons-wrapper">
          <button
            id="btn-reset"
            data-testid="btn-reset"
            className="action-btn"
            onClick={() => props.onReset()}
          >
            Reset
          </button>
          <button
            id="btn-randomize"
            data-testid="btn-randomize"
            className="action-btn"
            onClick={() => props.onRandomize()}
          >
            Randomize
          </button>
        </div>
      </div>
    </>
  );
}
