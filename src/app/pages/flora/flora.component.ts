import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-flora',
  templateUrl: './flora.component.html',
  styleUrls: ['./flora.component.css']
})
export class FloraComponent {

constructor(private d:HeroService,private r:Router){}
flora=this.d.getfldata();
gotopage(id:any){
  id=localStorage.setItem('id',id)
  this.r.navigate(['/singlefl'])
}
ngOnInit(){
  this.d.yes();
  }

}
