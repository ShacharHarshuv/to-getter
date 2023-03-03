import { toGetter } from './toGetter';

describe(toGetter.name, () => {
  it('should return a function that returns the input value when passed a value', () => {
    const input = 42;
    const getter = toGetter(input);
    expect(getter()).toBe(input);
  });

  it('should return a function that returns the result of the input function when passed a function', () => {
    const input = () => 42;
    const getter = toGetter(input);
    expect(getter()).toBe(42);
  });

  it('should return a function that passes arguments to the input function', () => {
    const input = (a: number, b: number) => a + b;
    const getter = toGetter(input);
    expect(getter(2, 3)).toBe(5);
  });
});
