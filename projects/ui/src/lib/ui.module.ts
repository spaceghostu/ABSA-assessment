import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, NavigationComponent],
  imports: [RouterModule, MatIconModule],
  exports: [UiComponent, HeaderComponent, NavigationComponent],
})
export class UiModule {}
