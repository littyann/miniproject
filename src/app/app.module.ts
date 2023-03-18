import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FloraComponent } from './pages/flora/flora.component';
import { FaunaComponent } from './pages/fauna/fauna.component';
import { NavbarComponent } from './util/navbar/navbar.component';
import { FooterComponent } from './util/footer/footer.component';
import { SingleflComponent } from './pages/singlefl/singlefl.component';
import { SinglefnComponent } from './pages/singlefn/singlefn.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './pages/add/add.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FloraComponent,
    FaunaComponent,
    NavbarComponent,
    FooterComponent,
    SingleflComponent,
    SinglefnComponent,
    SignupComponent,
    LoginComponent,
    AddComponent
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
