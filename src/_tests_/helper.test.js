import { calculateWinner } from "../helper";
describe("calculateWinner", () => {
  const x = "X";
  const o = "O";
  it("calls no winner for empty board", () => {
    expect(
      calculateWinner([null, null, null, null, null, null, null, null, null])
    ).toEqual(null);
  });

  it("calls winner for X", () => {
    expect(calculateWinner([null, null, x, x, o, x, null, o, x])).toEqual(x);
  });

  it("calls winner for O", () => {
    expect(calculateWinner([null, null, o, x, o, x, o, o, x])).toEqual(o);
  });
});
