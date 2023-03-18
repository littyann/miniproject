import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name:string='';
  description:string='';
  platform:string='';
  adddata:any
  constructor(public hero:HeroService,private fire:Firestore){}
ngOnInit(){
this.hero.yes();
}
add(){
  const data = {
   name:this.name,
   description:this.description,
   platform:this.platform
   }
  
  console.log(data);
 const docRef = collection(this.fire,"adddata")
 this.hero.insertData(docRef,data) 
 this.name='';
 this.description='';
 this.platform='';
 
}
}
