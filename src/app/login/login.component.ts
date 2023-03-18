import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  uid:string='';
  constructor(public hero:HeroService){}
ngOnInit(){
this.hero.no();

}
login(){
this.hero.login(this.username,this.password);
this.username='';
this.password='';
}


}

