import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import {CityComponent} from './city/city.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'city/:id', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
