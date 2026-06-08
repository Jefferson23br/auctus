import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-tech-background',
  template: `
    <div class="hero-tech-bg" aria-hidden="true">
      <svg
        class="hero-tech-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(37, 99, 235, 0)" />
            <stop offset="45%" stop-color="rgba(37, 99, 235, 0.22)" />
            <stop offset="100%" stop-color="rgba(37, 99, 235, 0)" />
          </linearGradient>
        </defs>

        <g class="strand strand-a">
          <path d="M180 0 C 220 120, 140 240, 180 360 S 220 600, 180 900" />
          <path d="M260 0 C 300 120, 220 240, 260 360 S 300 600, 260 900" />
          <path d="M340 0 C 380 120, 300 240, 340 360 S 380 600, 340 900" />
        </g>

        <g class="strand strand-b">
          <path d="M620 0 C 580 140, 660 280, 620 420 S 580 700, 620 900" />
          <path d="M700 0 C 660 140, 740 280, 700 420 S 660 700, 700 900" />
          <path d="M780 0 C 740 140, 820 280, 780 420 S 740 700, 780 900" />
        </g>

        <g class="strand strand-c">
          <path d="M1040 0 C 1080 110, 1000 230, 1040 350 S 1080 590, 1040 900" />
          <path d="M1120 0 C 1160 110, 1080 230, 1120 350 S 1160 590, 1120 900" />
          <path d="M1200 0 C 1240 110, 1160 230, 1200 350 S 1240 590, 1200 900" />
        </g>

        <g class="connectors">
          <path d="M180 120 C 400 100, 520 160, 620 140" />
          <path d="M260 280 C 460 260, 560 300, 700 280" />
          <path d="M340 440 C 520 420, 640 460, 780 440" />
          <path d="M620 200 C 820 180, 920 220, 1040 200" />
          <path d="M700 360 C 900 340, 1000 380, 1120 360" />
          <path d="M780 520 C 960 500, 1080 540, 1200 520" />
          <path d="M180 640 C 420 620, 760 660, 1040 640" />
        </g>

        <g class="nodes">
          <circle cx="180" cy="120" r="2.5" />
          <circle cx="620" cy="140" r="2.5" />
          <circle cx="260" cy="280" r="2.5" />
          <circle cx="700" cy="280" r="2.5" />
          <circle cx="1040" cy="200" r="2.5" />
          <circle cx="1120" cy="360" r="2.5" />
          <circle cx="340" cy="440" r="2.5" />
          <circle cx="780" cy="440" r="2.5" />
          <circle cx="1200" cy="520" r="2.5" />
        </g>
      </svg>
    </div>
  `,
  styles: `
    .hero-tech-bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      background: #ffffff;
    }

    .hero-tech-svg {
      width: 100%;
      height: 100%;
    }

    .hero-tech-svg path {
      fill: none;
      stroke: url(#line-fade);
      stroke-width: 1;
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }

    .strand path {
      stroke: rgba(37, 99, 235, 0.14);
      stroke-dasharray: 12 18;
      animation: tech-flow 18s linear infinite;
    }

    .strand-a path:nth-child(2) {
      animation-duration: 22s;
      animation-delay: -4s;
    }

    .strand-a path:nth-child(3) {
      animation-duration: 26s;
      animation-delay: -8s;
    }

    .strand-b path {
      stroke: rgba(37, 99, 235, 0.11);
      animation-duration: 20s;
      animation-delay: -2s;
    }

    .strand-b path:nth-child(2) {
      animation-duration: 24s;
    }

    .strand-b path:nth-child(3) {
      animation-duration: 28s;
      animation-delay: -6s;
    }

    .strand-c path {
      stroke: rgba(37, 99, 235, 0.13);
      animation-duration: 21s;
      animation-delay: -3s;
    }

    .strand-c path:nth-child(2) {
      animation-duration: 25s;
    }

    .strand-c path:nth-child(3) {
      animation-duration: 27s;
      animation-delay: -7s;
    }

    .connectors path {
      stroke: rgba(37, 99, 235, 0.09);
      stroke-dasharray: 6 14;
      animation: tech-flow 14s linear infinite reverse;
    }

    .connectors path:nth-child(odd) {
      animation-duration: 16s;
    }

    .nodes circle {
      fill: rgba(37, 99, 235, 0.28);
      animation: node-pulse 4s ease-in-out infinite;
    }

    .nodes circle:nth-child(odd) {
      animation-delay: -1.2s;
    }

    .strand-a,
    .strand-b,
    .strand-c {
      animation: strand-drift 28s ease-in-out infinite alternate;
      transform-origin: center;
    }

    .strand-b {
      animation-duration: 34s;
      animation-delay: -6s;
    }

    .strand-c {
      animation-duration: 30s;
      animation-delay: -12s;
    }

    @keyframes tech-flow {
      to {
        stroke-dashoffset: -180;
      }
    }

    @keyframes strand-drift {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(0, -18px, 0);
      }
    }

    @keyframes node-pulse {
      0%,
      100% {
        opacity: 0.35;
        transform: scale(1);
      }
      50% {
        opacity: 0.9;
        transform: scale(1.35);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .strand path,
      .connectors path,
      .nodes circle,
      .strand-a,
      .strand-b,
      .strand-c {
        animation: none;
      }
    }
  `,
})
export class HeroTechBackgroundComponent {}
