import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {
     path:'signup',component:UserComponent,
     children:[{path:'',component:SignupComponent}]
  },
  {
    path:'login',component:UserComponent,
    children:[{path:'',component:SignInComponent}]
 },
 {path:'',redirectTo:'/login',pathMatch:'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
