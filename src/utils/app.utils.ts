function getRandomPosByMinMax(
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
): [number, number] {
  const x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
  const y = Math.floor(Math.random() * (maxY - minY + 1) + minY);
  return [x, y];
}

export function normalizePos(pos: [number, number], size: number) {
  let x = pos[0] < 0 ? 0 : pos[0];
  x = x > window.innerWidth - size ? window.innerWidth - size : x;
  let y = pos[1] < 0 ? 0 : pos[1];
  y = y > window.innerHeight - size ? window.innerHeight - size : y;
  return [x, y];
}

export function getRandomPos(size: number) {
  return normalizePos(
    getRandomPosByMinMax(0, 0, window.innerWidth, window.innerHeight),
    size
  );
}

export function getTempClass(temp: number) {
  if (temp < 10) {
    return "blue";
  } else if (temp >= 10 && temp < 20) {
    return "green";
  } else if (temp >= 20 && temp < 30) {
    return "green";
  } else {
    return "red";
  }
}
