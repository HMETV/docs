// logo-animation.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoAnimationService {
  private animationState = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Method to toggle animation state
  toggleAnimation() {
    this.animationState.next(!this.animationState.value);
  }

  // Method to get the animation state as an observable
  getAnimationState() {
    return this.animationState.asObservable();
  }
}
