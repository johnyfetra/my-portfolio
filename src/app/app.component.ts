import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderModule } from './Modules/header.module';
import { FooterModule } from './Modules/footer.module';
import { MainComponent } from './Components/Layouts/main/main.component';
import { MainModule } from './Modules/main.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HeaderModule,
    FooterModule,
    MainModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
