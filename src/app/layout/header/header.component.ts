import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HeaderScrollService } from '../header-scroll.service';

interface NavItem {
  label: string;
  path: string;
  isCta?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly headerScroll = inject(HeaderScrollService);

  protected readonly logoSrc = '/images/logo-semfundo.png';
  protected readonly brandName = 'Auctus Tecnologia';
  protected readonly menuOpen = signal(false);
  protected readonly isCompact = this.headerScroll.isCompact;

  protected readonly navItems: NavItem[] = [
    { label: 'Serviços', path: '/servicos' },
    { label: 'Tecnologias', path: '/tecnologias' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Parcerias', path: '/parcerias' },
    { label: 'Contato', path: '/contato', isCta: true },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.syncBodyScroll();
  }

  ngOnInit(): void {
    this.updateCompactState();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.updateCompactState();
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 900 && this.menuOpen()) {
      this.closeMenu();
    }
  }

  private updateCompactState(): void {
    this.headerScroll.update(window.scrollY);
  }

  private syncBodyScroll(): void {
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
