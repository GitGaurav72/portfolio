import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-particle-bg',
  template: '<canvas #particleCanvas></canvas>',
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
  `],
  standalone: true
})
export class ParticleBgComponent implements AfterViewInit {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: 0, y: 0 };

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.initCanvas();
    this.createParticles();
    this.animate();
    this.addEventListeners();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles() {
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      ));
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    this.particles.forEach(particle => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
    });

    requestAnimationFrame(() => this.animate());
  }

  private addEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      this.initCanvas();
    });
  }
}

class Particle {
  private vx: number = (Math.random() - 0.5) * 2;
  private vy: number = (Math.random() - 0.5) * 2;
  private size: number = Math.random() * 2;

  constructor(private x: number, private y: number) {}

  update(mouse: { x: number, y: number }) {
    this.x += this.vx;
    this.y += this.vy;

    // Mouse interaction
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * 1;
      this.y -= Math.sin(angle) * 1;
    }

    // Boundary check
    if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#f2f2f2';
    ctx.fill();
  }
}