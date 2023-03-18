import { Component,OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    
  }
  name:string='';
  email:string='';
  password:string='';


constructor(private auth:HeroService){}


  register(){
    const crud ={
      name:this.name,
      email:this.email,
      password:this.password
    }
    this.auth.register(crud);
    this.name='';
    this.email='';
    this.password='';
  }

}
