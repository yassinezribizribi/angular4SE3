import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { ApartmentsComponent } from './appartement/apartments/apartments.component';
import { AddAppartmentComponent } from './appartement/add-appartment/add-appartment.component';
import { UserComponent } from './user/user.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';

const routes: Routes = [
  { path: "home1", component: HomeComponent },
  { path: "adduser", component: UserComponent },
  { path: "addr", component: AddResidenceComponent },

  { path: "residence", component: ResidenceComponent },
  { path: "residence/details/:id", component: ResidenceDetailsComponent},
  {path:"appart", component:ApartmentsComponent},
  {path:"addApp", component:AddAppartmentComponent},
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
