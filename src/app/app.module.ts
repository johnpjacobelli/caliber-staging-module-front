<<<<<<< HEAD
import { SwotComponent } from './components/swot/swot.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewAssociateComponent } from './components/view-associate/view-associate.component';
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> 3875eb610e1e26af33e5db8b2d98d49573d59bb0
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SwotComponent } from './components/swot/swot.component';
import { UpdateAssociateComponent } from './components/update-associate/update-associate.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { ViewAssociateComponent } from './components/view-associate/view-associate.component';
import { ViewSwotComponent } from './components/view-swot/view-swot.component';
import { CorsInterceptor } from './services/interceptor/cors.interceptor';
<<<<<<< HEAD
import { UpdateAssociateComponent } from './components/update-associate/update-associate.component';
import { UpdateSwotComponent } from './components/update-swot/update-swot.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { JwtInterceptor } from './services/interceptor/jwt.interceptor';
>>>>>>> 3875eb610e1e26af33e5db8b2d98d49573d59bb0

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewAssociateComponent,
    SwotComponent,
    LoginComponent,
    HomeComponent,
    ViewSwotComponent,
    UpdateItemComponent,
    AddItemComponent,
    UpdateAssociateComponent,
    UpdateSwotComponent,
    ToastMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< HEAD
    BrowserAnimationsModule,
    NgbModule,
    // ToastrModule.forRoot()
=======
>>>>>>> 3875eb610e1e26af33e5db8b2d98d49573d59bb0
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
<<<<<<< HEAD
=======
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
>>>>>>> 3875eb610e1e26af33e5db8b2d98d49573d59bb0
      useClass: CorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
