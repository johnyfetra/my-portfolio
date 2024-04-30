import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Components/Layouts/header/header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MdbCollapseModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
