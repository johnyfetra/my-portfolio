import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = MENU_ITEMS;
  activePage = 'Home';

  onClick(activePage: string) {
    this.activePage = activePage;
  }
}
