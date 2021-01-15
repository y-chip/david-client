import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';

@Injectable({
  providedIn: 'root',
})
export class ProgressSpinnerOverlayService {
  overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
  });

  constructor(private overlay: Overlay) {}

  show(): void {
    this.overlayRef.attach(new ComponentPortal(MatSpinner));
  }

  close(): void {
    this.overlayRef.detach();
  }
}
