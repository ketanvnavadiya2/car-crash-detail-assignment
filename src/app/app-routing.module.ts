import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCrashComponent } from './components/car-crash/car-crash.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [ 
  {
    path: '',
    component: CarCrashComponent
  },
    {
    path: 'details/:id',
    component: CarDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
