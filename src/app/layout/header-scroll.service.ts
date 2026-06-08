import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderScrollService {
  readonly isCompact = signal(false);

  private readonly threshold = 40;

  update(scrollY: number): void {
    this.isCompact.set(scrollY > this.threshold);
  }
}
