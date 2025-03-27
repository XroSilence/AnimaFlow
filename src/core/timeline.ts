import { Animator } from './animator';
import { AnimationProps } from '../index';

export class Timeline {
  private animations: {
    target: string | Element;
    props: AnimationProps;
    startTime: number;
  }[] = [];

  private currentTime: number = 0;

  /**
   * Add an animation to the timeline
   * @param target - Animation target
   * @param props - Animation properties
   * @returns Timeline instance for chaining
   */
  public to(target: string | Element, props: AnimationProps): Timeline {
    this.animations.push({
      target,
      props: {
        ...props,
        delay: (props.delay || 0) + this.currentTime
      },
      startTime: this.currentTime
    });

    // Update current time
    this.currentTime += (props.duration || 1) + (props.delay || 0);

    return this;
  }

  /**
   * Play the entire timeline of animations
   * @returns Promise resolving when all animations complete
   */
  public play(): Promise<void> {
    const animationPromises = this.animations.map(anim => {
      const animator = new Animator(anim.target, anim.props);
      return animator.play();
    });

    return Promise.all(animationPromises).then(() => {
      // Reset timeline after completion
      this.currentTime = 0;
    });
  }

  /**
   * Pause the entire timeline (Not implemented in this version)
   */
  public pause(): void {
    // TODO: Implement pause functionality
    console.warn('Pause functionality not yet implemented');
  }

  /**
   * Stop the entire timeline (Not implemented in this version)
   */
  public stop(): void {
    // TODO: Implement stop functionality
    console.warn('Stop functionality not yet implemented');
  }

  /**
   * Get total duration of the timeline
   * @returns Total duration in seconds
   */
  public duration(): number {
    return this.currentTime;
  }
}
