import React, { useCallback, useEffect } from "react";
import "./App.css";
import Piece from "./components/Piece";
import Controls from "./components/Controls";
import { getRandomPos, getTempClass, normalizePos } from "./utils/app.utils";

const API_URL =
  "https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv";
const INITIAL_POS = [100, 50];
const CIRCLE_SIZE = 100;

export default function App() {
  const [pos, setPos] = React.useState(INITIAL_POS);
  const [circleColor, setCircleColor] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const temp = Number(data?.current?.temperature);
        if (temp) {
          setCircleColor(getTempClass(temp));
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMove = useCallback(
    (dx: number, dy: number) => {
      const newPos: [number, number] = [pos[0] + dx, pos[1] + dy];
      setPos(normalizePos(newPos, CIRCLE_SIZE));
    },
    [pos]
  );

  const handleReset = useCallback(() => {
    setPos(INITIAL_POS);
  }, []);

  const handleRandomize = useCallback(() => {
    setPos(getRandomPos(CIRCLE_SIZE));
  }, []);

  return (
    <div className="App">
      <Piece x={pos[0]} y={pos[1]} size={CIRCLE_SIZE} color={circleColor} />
      <Controls
        onMove={handleMove}
        onReset={handleReset}
        onRandomize={handleRandomize}
      />
    </div>
  );
}
