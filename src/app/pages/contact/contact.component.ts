import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  name:string='';
  email:string='';
  number:string='';
  message:string='';
  contactdata:any
  constructor(public hero:HeroService,private fire:Firestore ){}
ngOnInit(){
 
this.hero.yes();
}
submit(){
  const data = {
   name:this.name,
   email:this.email,
   number:this.number,
   message:this.message
   }
  
  console.log(data);
 const docRef = collection(this.fire,"contactdata")
 this.hero.insertData(docRef,data) 
 this.name='';
 this.email='';
 this.number='';
 this.message='';
}
}
