import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Email : String

  password : String

  async SignUpUser(){
    if(this.Email != undefined){
       console.log("hello " + this.Email.toString()); 
    }
    else{
      console.log("hello please enter email"); 
      return
    }

    if(this.password != undefined){
      if(this.password.length >= 6){
        console.log("hello " + this.password.toString());
      }
      else{
        console.log("Password must be 6 or more characters"); 
      }
      
   }
   else{
     console.log("hello please enter a password"); 
     return
   }

   /*
   try{
     const authLogIn = await this.authService.signUpUser(this.Email.toString(), this.password.toString());
     window.alert(authLogIn);
   }
   catch(error){
    window.alert(error); 
   }
   */
  
  }

  gotToLogIn(){
    //this.router.navigate(['/login']);
    //this.zone.run(() => { this.router.navigate(['/login']); });
  }

}
