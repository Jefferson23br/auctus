import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-tech-background',
  template: `
    <div class="hero-tech-bg" aria-hidden="true">
      <svg
        class="hero-tech-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMinYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="white" stop-opacity="1" />
            <stop offset="75%" stop-color="white" stop-opacity="1" />
            <stop offset="86%" stop-color="white" stop-opacity="0.45" />
            <stop offset="96%" stop-color="white" stop-opacity="0.08" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </linearGradient>

          <mask id="circuit-mask">
            <rect width="1200" height="800" fill="url(#fade-right)" />
          </mask>
        </defs>

        <g mask="url(#circuit-mask)" transform="scale(1.72 1)">
          <g class="circuit-layer circuit-dark">
            <path d="M0 72 H48 L72 48 H168 L192 72 H312 L336 96 H468" />
            <path d="M0 128 H36 L60 104 H144 L168 128 H252 L276 152 H396" />
            <path d="M0 196 H64 L88 172 H204 L228 196 H348 L372 220 H504" />
            <path d="M0 248 H28 L52 224 H132 L156 248 H276 L300 272 H420" />
            <path d="M0 316 H56 L80 292 H176 L200 316 H296 L320 340 H440" />
            <path d="M0 388 H44 L68 364 H160 L184 388 H280 L304 412 H408" />
            <path d="M0 452 H72 L96 428 H216 L240 452 H360 L384 476 H516" />
            <path d="M0 516 H40 L64 492 H148 L172 516 H256 L280 540 H372" />
            <path d="M0 584 H52 L76 560 H168 L192 584 H284 L308 608 H400" />
            <path d="M0 648 H68 L92 624 H200 L224 648 H332 L356 672 H456" />
            <path d="M0 712 H32 L56 688 H136 L160 712 H240 L264 736 H352" />
          </g>

          <g class="circuit-layer circuit-mid">
            <path d="M0 96 H24 L48 72 H120 L144 96 H216 L240 120 H324" />
            <path d="M0 168 H40 L64 144 H156 L180 168 H272 L296 192 H384" />
            <path d="M0 228 H20 L44 204 H108 L132 228 H204 L228 252 H300" />
            <path d="M0 344 H48 L72 320 H168 L192 344 H288 L312 368 H396" />
            <path d="M0 412 H36 L60 388 H144 L168 412 H252 L276 436 H348" />
            <path d="M0 488 H60 L84 464 H192 L216 488 H324 L348 512 H432" />
            <path d="M0 552 H28 L52 528 H124 L148 552 H220 L244 576 H316" />
            <path d="M0 620 H44 L68 596 H160 L184 620 H276 L300 644 H368" />
            <path d="M0 688 H56 L80 664 H176 L200 688 H296 L320 712 H388" />
          </g>

          <g class="circuit-layer circuit-light">
            <path d="M0 56 H16 L32 40 H88 L104 56 H160 L176 72 H232" />
            <path d="M0 152 H12 L28 136 H76 L92 152 H140 L156 168 H212" />
            <path d="M0 276 H32 L48 260 H112 L128 276 H192 L208 292 H268" />
            <path d="M0 364 H24 L40 348 H96 L112 364 H168 L184 380 H240" />
            <path d="M0 436 H20 L36 420 H92 L108 436 H164 L180 452 H228" />
            <path d="M0 548 H16 L32 532 H88 L104 548 H160 L176 564 H220" />
            <path d="M0 676 H24 L40 660 H96 L112 676 H168 L184 692 H244" />
          </g>

          <g class="circuit-layer circuit-accent">
            <path d="M0 108 H56 L80 84 H176 L200 108 H296" />
            <path d="M0 268 H44 L68 244 H160 L184 268 H276" />
            <path d="M0 424 H52 L76 400 H172 L196 424 H292" />
            <path d="M0 564 H40 L64 540 H152 L176 564 H264" />
            <path d="M0 700 H48 L72 676 H168 L192 700 H288" />
          </g>

          <g class="nodes-solid">
            <circle cx="468" cy="96" r="3.5" />
            <circle cx="396" cy="152" r="3" />
            <circle cx="504" cy="220" r="3.5" />
            <circle cx="420" cy="272" r="3" />
            <circle cx="440" cy="340" r="3" />
            <circle cx="408" cy="412" r="3" />
            <circle cx="516" cy="476" r="3.5" />
            <circle cx="372" cy="540" r="3" />
            <circle cx="400" cy="608" r="3" />
            <circle cx="456" cy="672" r="3" />
            <circle cx="296" cy="108" r="2.5" />
            <circle cx="384" cy="192" r="2.5" />
            <circle cx="432" cy="512" r="2.5" />
            <circle cx="388" cy="712" r="2.5" />
          </g>

          <g class="nodes-ring">
            <circle cx="312" cy="72" r="4" />
            <circle cx="252" cy="128" r="3.5" />
            <circle cx="348" cy="196" r="4" />
            <circle cx="276" cy="248" r="3.5" />
            <circle cx="296" cy="316" r="4" />
            <circle cx="280" cy="388" r="3.5" />
            <circle cx="360" cy="452" r="4" />
            <circle cx="256" cy="516" r="3.5" />
            <circle cx="284" cy="584" r="4" />
            <circle cx="332" cy="648" r="3.5" />
            <circle cx="240" cy="712" r="3.5" />
            <circle cx="168" cy="168" r="3" />
            <circle cx="192" cy="344" r="3" />
            <circle cx="216" cy="488" r="3" />
            <circle cx="148" cy="552" r="3" />
          </g>
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

    .circuit-layer path {
      fill: none;
      stroke-linecap: square;
      stroke-linejoin: miter;
      vector-effect: non-scaling-stroke;
    }

    .circuit-dark path {
      stroke: #60a5fa;
      stroke-width: 1;
      opacity: 0.22;
      stroke-dasharray: 10 16;
      animation: trace-flow 16s linear infinite;
    }

    .circuit-dark path:nth-child(odd) {
      animation-duration: 19s;
      animation-delay: -3s;
    }

    .circuit-mid path {
      stroke: #3b82f6;
      stroke-width: 1;
      opacity: 0.16;
      stroke-dasharray: 8 14;
      animation: trace-flow 13s linear infinite reverse;
    }

    .circuit-mid path:nth-child(3n) {
      animation-duration: 15s;
    }

    .circuit-light path {
      stroke: #93c5fd;
      stroke-width: 0.9;
      opacity: 0.1;
      stroke-dasharray: 6 12;
      animation: trace-flow 11s linear infinite;
    }

    .circuit-accent path {
      stroke: #38bdf8;
      stroke-width: 1;
      opacity: 0.2;
      stroke-dasharray: 5 10;
      animation: trace-flow 9s linear infinite;
    }

    .circuit-accent path:nth-child(even) {
      animation-delay: -2s;
    }

    .nodes-solid circle {
      fill: #7dd3fc;
      opacity: 0.55;
      animation: node-glow 3.5s ease-in-out infinite;
    }

    .nodes-solid circle:nth-child(odd) {
      animation-delay: -1.1s;
    }

    .nodes-ring circle {
      fill: none;
      stroke: #93c5fd;
      stroke-width: 1;
      opacity: 0.4;
      animation: ring-pulse 4s ease-in-out infinite;
    }

    .nodes-ring circle:nth-child(even) {
      animation-delay: -1.8s;
    }

    .circuit-layer {
      animation: layer-shift 24s ease-in-out infinite alternate;
    }

    .circuit-mid {
      animation-duration: 28s;
      animation-delay: -4s;
    }

    .circuit-light {
      animation-duration: 32s;
      animation-delay: -8s;
    }

    @keyframes trace-flow {
      to {
        stroke-dashoffset: -120;
      }
    }

    @keyframes layer-shift {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(10px, -6px, 0);
      }
    }

    @keyframes node-glow {
      0%,
      100% {
        opacity: 0.35;
        transform: scale(1);
      }
      50% {
        opacity: 0.65;
        transform: scale(1.15);
      }
    }

    @keyframes ring-pulse {
      0%,
      100% {
        opacity: 0.28;
        stroke-width: 1;
      }
      50% {
        opacity: 0.55;
        stroke-width: 1.15;
      }
    }

    @media (max-width: 900px) {
      .hero-tech-svg {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .circuit-layer path,
      .nodes-solid circle,
      .nodes-ring circle,
      .circuit-layer {
        animation: none;
      }
    }
  `,
})
export class HeroTechBackgroundComponent {}
