import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fauna',
  templateUrl: './fauna.component.html',
  styleUrls: ['./fauna.component.css']
})
export class FaunaComponent {
  constructor(private d:HeroService,private r:Router){}
  fauna=this.d.getfndata();
  gotopage(id:any){
    id=localStorage.setItem('id',id)
    this.r.navigate(['/singlefn'])
  }
ngOnInit(){
this.d.yes();
}
  
}
