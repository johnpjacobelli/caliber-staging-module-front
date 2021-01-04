import { SwotComponent } from './components/swot/swot.component';
import { ViewAssociateComponent } from './components/view-associate/view-associate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSwotComponent } from './components/view-swot/view-swot.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'view-associate',
    component: ViewAssociateComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },

  {path: 'swot',
  component: SwotComponent
  },
  {path: 'view',
  component: ViewSwotComponent
  },
  {path: 'updateItem', component: UpdateItemComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
