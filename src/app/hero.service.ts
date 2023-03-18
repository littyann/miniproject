import { Injectable } from '@angular/core';
import { fauna, flora } from 'src/assets/data';
import { getAuth } from '@angular/fire/auth';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore ,collectionData} from '@angular/fire/firestore';
import { DocumentReference, getFirestore } from '@firebase/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  userid:any;
  db:any =getFirestore()

  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }
 
  getfldata()
{
return flora
} 

getfndata()
{
  return fauna
}
visible : boolean | undefined

no(): void { this.visible = false; }

yes() { this.visible = true; }

doSomethingElseUseful() { }


login(email:string,password:string){
signInWithEmailAndPassword(this.auth,email,password).then(()=>{
  localStorage.setItem('email',email);
  this.userid=this.auth.currentUser?.uid;
  console.log(this.userid);

  this.router.navigate(['home'])
}, (err)=>{
  alert(err.message);
  this.router.navigate(['login'])
});
}



register(cred:any){
  createUserWithEmailAndPassword(this.auth,cred.email,cred.password).then(
  () =>{
    this.userid= this.auth.currentUser?.uid;
    const userDetails={
      uid:this.userid,
      name:cred.name,
      email:cred.email,
      
    };
    const docRef = collection(this.firestore,'users');
    addDoc(docRef,userDetails).then(()=>{})
    .catch((err)=>console.log(err.message));
    alert("user created successfully");
    this.router.navigate(['/home']);


      }
  
  
  
  );
}

// addData(data:any){
//   const dataCollection = collection(this.firestore, 'contactdata') 
//   addDoc(dataCollection,data).then(response =>
//     {
//       console.log(response);
//     }).catch(err =>{
//       console.log(err);
//     })
// }
// getData(){
//   const dataCollection = collection(this.firestore, 'contactdata') 
//   collectionData(dataCollection).subscribe(data=>{
//     console.log(data);
//   })
    
// }

insertData(docRef:any,data:any){
  addDoc(docRef,data)
  .then(()=>{alert("sucessfull")})
  
  .catch((err) => alert(err))

} 


  }
