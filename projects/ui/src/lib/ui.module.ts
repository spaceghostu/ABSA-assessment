import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UiComponent, HeaderComponent],
  imports: [RouterModule, MatIconModule],
  exports: [UiComponent, HeaderComponent],
})
export class UiModule {}
