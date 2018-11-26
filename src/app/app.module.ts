import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AdsComponent } from './dashboard/ads/ads.component';
import { SectionComponent } from './dashboard/section/section.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import {AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api/api.service';


import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    AdsComponent,
    SectionComponent,
    CategoriesComponent,
    CouponsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    FormsModule,
    NgbModule,
    NgbModalModule,
    AngularFireModule.initializeApp({
 apiKey: "AIzaSyAAaTlWX2fB7N-j5N_6wehOjHIxFVYZlOs",
    authDomain: "olx-classified.firebaseapp.com",
    databaseURL: "https://olx-classified.firebaseio.com",
    projectId: "olx-classified",
    storageBucket: "olx-classified.appspot.com",
    messagingSenderId: "491967766578"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login', component:LoginComponent},
      { path:'signup', component:SignupComponent},
      { path:'dashboard', component:DashboardComponent, children:[
        { path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home', component:HomeComponent},
        {path: 'profile', component:ProfileComponent},
        { path:'ads', component:AdsComponent},
        { path:'sections', component:SectionComponent},
        { path:'categories', component:CategoriesComponent},
        { path:'users', component:UsersComponent},
      ]},
    ])
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
