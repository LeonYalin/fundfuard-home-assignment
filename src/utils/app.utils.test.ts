import { getRandomPos, getRandomPosByMinMax, getTempClass, normalizePos } from "./app.utils";

describe("Utility Functions", () => {
  test("getRandomPosByMinMax returns random position within the specified range", () => {
    const minX = 10;
    const minY = 20;
    const maxX = 30;
    const maxY = 40;

    const [x, y] = getRandomPosByMinMax(minX, minY, maxX, maxY);

    expect(x).toBeGreaterThanOrEqual(minX);
    expect(x).toBeLessThanOrEqual(maxX);
    expect(y).toBeGreaterThanOrEqual(minY);
    expect(y).toBeLessThanOrEqual(maxY);
  });

  test("normalizePos returns position within the viewport and adjusted to size", () => {
    const pos1: [number, number] = [-10, 500];
    const pos2: [number, number] = [800, -20];
    const pos3: [number, number] = [2000, 1000];

    const normalized1 = normalizePos(pos1, 50);
    const normalized2 = normalizePos(pos3, 100);

    expect(normalized1).toEqual([0, 500]);
    expect(normalized2).toEqual([window.innerWidth - 100, window.innerHeight - 100]);
  });

  test("getRandomPos returns random position within the viewport and adjusted to size", () => {
    const size = 50;
    const [x, y] = getRandomPos(size);

    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThanOrEqual(window.innerWidth - size);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThanOrEqual(window.innerHeight - size);
  });

  test("getTempClass returns correct color class based on temperature", () => {
    const temp1 = 5;
    const temp2 = 15;
    const temp3 = 25;
    const temp4 = 35;

    const class1 = getTempClass(temp1);
    const class2 = getTempClass(temp2);
    const class3 = getTempClass(temp3);
    const class4 = getTempClass(temp4);

    expect(class1).toBe("blue");
    expect(class2).toBe("green");
    expect(class3).toBe("green");
    expect(class4).toBe("red");
  });
});
