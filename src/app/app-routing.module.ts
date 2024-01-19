import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Detail_countryComponent } from './pages/detail_country/detail_country.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':country',
    component: Detail_countryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
