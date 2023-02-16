import { logic } from "./logic";

describe("Logic", () => {
  test("test logic", () => {
    const actual = logic(1, 2);
    expect(actual).toEqual(3);
  });

  // test("test logic c", () => {
  //   const actual = logic(1, 2, 30);
  //   expect(actual).toEqual(30);
  // });
});
