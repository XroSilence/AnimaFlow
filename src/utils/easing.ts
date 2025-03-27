export class Easing {
  /**
   * Linear easing (no acceleration)
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static linear(t: number): number {
    return t;
  }

  /**
   * Quadratic ease in
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static quadIn(t: number): number {
    return t * t;
  }

  /**
   * Quadratic ease out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static quadOut(t: number): number {
    return t * (2 - t);
  }

  /**
   * Quadratic ease in and out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static quadInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  /**
   * Cubic ease in
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static cubicIn(t: number): number {
    return t * t * t;
  }

  /**
   * Cubic ease out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static cubicOut(t: number): number {
    return --t * t * t + 1;
  }

  /**
   * Cubic ease in and out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static cubicInOut(t: number): number {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Power ease with configurable exponent
   * @param t - Progress (0-1)
   * @param pow - Power exponent
   * @returns Eased progress
   */
  static power(t: number, pow: number): number {
    return Math.pow(t, pow);
  }

  /**
   * Elastic ease out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static elasticOut(t: number): number {
    const p = 0.7;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  }

  /**
   * Bounce ease out
   * @param t - Progress (0-1)
   * @returns Eased progress
   */
  static bounceOut(t: number): number {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }
}