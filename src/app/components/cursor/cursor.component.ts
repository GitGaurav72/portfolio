import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-outer">
      <div class="cursor-dot"></div>
      <div class="cursor-circle"></div>
    </div>
  `,
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit, OnDestroy {
  private mouseMoveHandler = this.onMouseMove.bind(this);

  ngOnInit() {
    document.addEventListener('mousemove', this.mouseMoveHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  private onMouseMove(e: MouseEvent) {
    const cursor = document.querySelector('.cursor-outer') as HTMLElement;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }
}