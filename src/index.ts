// Core AnimaFlow Library
import { Animator } from './core/animator';
import { Timeline } from './core/timeline';
import { Easing } from './utils/easing';

class AnimaFlow {
  private static instance: AnimaFlow;

  private constructor() {}

  /**
   * Singleton instance of AnimaFlow
   */
  public static getInstance(): AnimaFlow {
    if (!AnimaFlow.instance) {
      AnimaFlow.instance = new AnimaFlow();
    }
    return AnimaFlow.instance;
  }

  /**
   * Create a new animation
   * @param target - Animation target
   * @param props - Animation properties
   * @returns Animator instance
   */
  public to(target: string | Element, props: AnimationProps): Animator {
    return new Animator(target, props);
  }

  /**
   * Create a new timeline
   * @returns Timeline instance
   */
  public timeline(): Timeline {
    return new Timeline();
  }

  /**
   * Access easing functions
   */
  public get ease(): typeof Easing {
    return Easing;
  }
}

// Export types
export interface AnimationProps {
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  opacity?: number;
  ease?: string;
}

// Export the library
export default AnimaFlow.getInstance();
