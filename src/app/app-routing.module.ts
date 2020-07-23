import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeContentComponent,
      },
      {
        path: 'flights',
        component: FlightsComponent,
      },
      {
        path: 'hotels',
        component: HotelsComponent,
      },
      {
        path: 'holidays',
        component: HolidaysComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      }
    ]
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
