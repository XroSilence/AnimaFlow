import { Easing } from '../utils/easing';

describe('Easing Functions', () => {
  test('linear interpolation', () => {
    expect(Easing.linear(0)).toBe(0);
    expect(Easing.linear(0.5)).toBe(0.5);
    expect(Easing.linear(1)).toBe(1);
  });

  test('quadratic ease in', () => {
    expect(Easing.quadIn(0)).toBe(0);
    expect(Easing.quadIn(0.5)).toBe(0.25);
    expect(Easing.quadIn(1)).toBe(1);
  });

  test('cubic ease out', () => {
    expect(Easing.cubicOut(0)).toBe(0);
    expect(Easing.cubicOut(1)).toBe(1);
  });
});