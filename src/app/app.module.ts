import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import {LandingpageComponent} from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot([
    //   {path: '', component:ProfileComponent},
    //   {path: '', component:SearchComponent},
    //   {path: '', component:ProfileComponent},
    //   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
