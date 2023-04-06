import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';
import { HomeComponent } from './home/home.component';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';
import { NvInterventionComponent } from './nv-intervention/nv-intervention.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'Intervention/:id', component: InterventionComponent },
  { path: 'catalogue', component: ListInterventionComponent},
  { path: 'createIntervention', component: NvInterventionComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
