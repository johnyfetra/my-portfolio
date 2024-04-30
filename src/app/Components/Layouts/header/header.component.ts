import { Component } from '@angular/core';
import { menuItems } from '../../../Shared/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = menuItems;
  activePage = 'Home';

  onClick(activePage: string) {
    this.activePage = activePage;
  }
}
