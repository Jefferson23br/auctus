import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
export class HeaderComponent {
  protected readonly logoSrc = '/images/logo.webp';
  protected readonly brandName = 'Auctus Tecnologia';
  protected readonly menuOpen = signal(false);

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

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 900 && this.menuOpen()) {
      this.closeMenu();
    }
  }

  private syncBodyScroll(): void {
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
