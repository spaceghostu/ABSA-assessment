import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    UiComponent,
    HeaderComponent,
  ],
  imports: [
  ],
  exports: [
    UiComponent,
    HeaderComponent,
  ]
})
export class UiModule { }
