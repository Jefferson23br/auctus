import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeaderScrollService } from '../header-scroll.service';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  protected readonly headerScroll = inject(HeaderScrollService);
}
