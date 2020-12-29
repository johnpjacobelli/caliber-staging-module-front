import { ViewAssociateComponent } from './components/view-associate/view-associate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  { 
    path:"view-associate",
    component: ViewAssociateComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
