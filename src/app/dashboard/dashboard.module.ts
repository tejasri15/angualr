import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateformsComponent } from '../templateforms/templateforms.component';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';
import { JoivalidationsComponent } from '../joivalidations/joivalidations.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'template',component:TemplateformsComponent},
{path:'reactive',component:ReactiveformsComponent},
{path:'joivalidation',component:JoivalidationsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
