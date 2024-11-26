import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Shared/components/header/header.component';
import { FooterComponent } from '../Shared/components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive,
    MdbCollapseModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
