import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-singlefn',
  templateUrl: './singlefn.component.html',
  styleUrls: ['./singlefn.component.css']
})
export class SinglefnComponent {
  fl:any
  constructor(private d:HeroService){}
  ngOnInit(){
  let id:any=localStorage.getItem('id')
  let arr=this.d.getfndata();
  this.fl=arr.filter(e=>e.name==id)
  this.d.yes();
  }
}
