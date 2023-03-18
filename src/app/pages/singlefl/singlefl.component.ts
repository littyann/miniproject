import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-singlefl',
  templateUrl: './singlefl.component.html',
  styleUrls: ['./singlefl.component.css']
})
export class SingleflComponent {
fl:any
constructor(private d:HeroService){}
ngOnInit(){
let id:any=localStorage.getItem('id')
let arr=this.d.getfldata();
this.fl=arr.filter(e=>e.name==id)
this.d.yes();
  
}
}
