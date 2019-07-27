import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { VideouploadComponent } from './videoupload/videoupload.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { JoivalidationsComponent } from './joivalidations/joivalidations.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ConversionsComponent } from './conversions/conversions.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'piecharts',component:PiechartsComponent},
{path:'conversions',component:ConversionsComponent},
  {path:'barcharts',component:BarchartComponent},
  {path:'videoupload',component:VideouploadComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'template',component:TemplateformsComponent},
  {path:'reactive',component:ReactiveformsComponent},
  {path:'joivalidation',component:JoivalidationsComponent},
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'**',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
