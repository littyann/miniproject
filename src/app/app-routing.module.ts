import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaunaComponent } from './pages/fauna/fauna.component';
import { FloraComponent } from './pages/flora/flora.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleflComponent } from './pages/singlefl/singlefl.component';
import { SinglefnComponent } from './pages/singlefn/singlefn.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'flora',component:FloraComponent
  },
  {
    path:'fauna',component:FaunaComponent
  },
  
  {
    path:'singlefl',component:SingleflComponent
  },
  {
    path:'singlefn',component:SinglefnComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'add',component:AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
