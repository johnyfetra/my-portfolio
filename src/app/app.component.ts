import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    MdbCollapseModule,
    CoreModule,
    HomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
