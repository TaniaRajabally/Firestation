import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { HttpClientModule } from '@angular/common/http';

//for pop-up
import { PopupModule } from '@progress/kendo-angular-popup';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MemberregComponent } from './register/memberreg/memberreg.component';
import { environment } from '../environments/environment'; 

//import { RouterModule } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { VolregComponent } from './register/volreg/volreg.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
//MBD Angular
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { VolComponent } from './vol/vol.component';
import { ChatComponent } from './chat/chat.component';
import { InloginComponent } from './inlogin/inlogin.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { TrainingComponent } from './training/training.component';
import { UsermapComponent } from './usermap/usermap.component';
//import { ModalComponent } from './modal/modal.component';
import { AgmCoreModule } from '@agm/core';
import { AdminComponent } from './admin/admin.component';
import { MeasuresComponent } from './measures/measures.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    VolComponent,
    ChatComponent,
    InloginComponent,
    AboutComponent,
    NewsComponent,
    TrainingComponent,
    UsermapComponent,
    AdminComponent,
    MeasuresComponent,
   
  ],
  imports: [
    BrowserModule,
    PopupModule,
    NgbModule,
    //AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.fireconfig), 
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
    /*  {path: 'qa', component: QaComponent},*/
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'qa/:$data', component: QaComponent},
      // { path: 'api', component: ApiComponent},
      // { path: 'nm', component : NmComponent},*/
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'vol', component: VolComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'inlogin', component:InloginComponent},
      {path: 'about', component:AboutComponent},
      {path: 'training', component:TrainingComponent},
      {path: 'news', component:NewsComponent},
      {path: 'usermap', component:UsermapComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'measures', component:MeasuresComponent},
      {path:'news', component:NewsComponent},




    ]),
    HttpClientModule,
],
providers: [AngularFireAuthModule],
bootstrap: [AppComponent],
schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
