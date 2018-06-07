import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';

const detailsRoutes: Routes = [
  { path: '', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(detailsRoutes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
