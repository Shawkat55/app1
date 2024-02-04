import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  {path:"",redirectTo:"cover",pathMatch:"full"},
  {path:"cover",component:CoverComponent},
  {path:"Home",component:HomeComponent},
  {path:"PORTFOLIO",component:PORTFOLIOComponent},
  {path:"CONTACT",component:CONTACTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
