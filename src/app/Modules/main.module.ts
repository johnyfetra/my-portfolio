import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Components/Layouts/main/main.component';
import { HomeComponent } from '../Components/home/home.component';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [CommonModule],
  exports: [MainComponent, HomeComponent],
})
export class MainModule {}
