import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './menu-bar.component';
import { MenuBarItemComponent } from './menu-bar-item/menu-bar-item.component';



@NgModule({
  declarations: [MenuBarComponent, MenuBarItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuBarComponent]
})
export class MenuBarModule { }
