import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from '@ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqsComponent,
    ContactComponent,
    FlightsComponent,
    HotelsComponent,
    HolidaysComponent,
    BlogComponent,
    HomeContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    UiModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase, 'calvin-absa'),
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
