import { Easing } from '../utils/easing';
import { AnimationProps } from '../index';

export class Animator {
  private target: Element | null;
  private props: AnimationProps;
  private startTime: number = 0;
  private rafId: number | null = null;

  constructor(target: string | Element, props: AnimationProps) {
    this.target = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    this.props = {
      duration: props.duration || 1,
      delay: props.delay || 0,
      ease: props.ease || 'linear',
      ...props
    };
  }

  /**
   * Start the animation
   * @returns Promise resolving when animation completes
   */
  public play(): Promise<void> {
    if (!this.target) {
      return Promise.reject(new Error('No target element found'));
    }

    return new Promise((resolve) => {
      this.startTime = performance.now() + (this.props.delay || 0) * 1000;
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - this.startTime;
        const progress = Math.min(elapsed / (this.props.duration! * 1000), 1);
        
        // Apply easing
        const easingFunction = Easing[this.props.ease as keyof typeof Easing] as (t: number) => number;
        const easedProgress = easingFunction(progress);
        
        this.updateTargetProperties(easedProgress);
        
        if (progress < 1) {
          this.rafId = requestAnimationFrame(animate);
        } else {
          this.cleanup();
          resolve();
        }
      };

      this.rafId = requestAnimationFrame(animate);
    });
  }

  /**
   * Update target element properties based on animation progress
   * @param progress - Animation progress (0-1)
   */
  private updateTargetProperties(progress: number): void {
    if (!this.target) return;

    const style = (this.target as HTMLElement).style;

    // Position transformation
    if (this.props.x !== undefined) {
      style.transform = `translateX(${progress * this.props.x}px)`;
    }

    if (this.props.y !== undefined) {
      style.transform += ` translateY(${progress * this.props.y}px)`;
    }

    // Rotation
    if (this.props.rotation !== undefined) {
      style.transform += ` rotate(${progress * this.props.rotation}deg)`;
    }

    // Scale
    if (this.props.scale !== undefined) {
      const currentScale = 1 + (this.props.scale - 1) * progress;
      style.transform += ` scale(${currentScale})`;
    }

    // Opacity
    if (this.props.opacity !== undefined) {
      style.opacity = `${1 - (1 - this.props.opacity) * (1 - progress)}`;
    }
  }

  /**
   * Clean up animation resources
   */
  private cleanup(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Stop the current animation
   */
  public stop(): void {
    this.cleanup();
  }
}
