import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoaderComponent } from './loader/loader.component';


var routes: Routes = [
  {
    path: 'loader' ,
    component : LoaderComponent
  } ,
  {
    path :'home' ,
    component : HomeComponent 
  },

  {path:'', redirectTo:'home', pathMatch:'full'},

  {
    path :'about',
    component : AboutUsComponent 
  },
  {
    path :'contact',
    component : ContactUsComponent 
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot(routes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
