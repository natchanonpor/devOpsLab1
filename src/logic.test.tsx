import { logic } from "./logic";

test('test logic', () => {
    const actual = logic(1,2);
    expect(actual).toEqual(5);
  });
  