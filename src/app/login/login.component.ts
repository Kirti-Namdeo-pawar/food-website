import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit():void{
    const localdata=localStorage.getItem("signupusers");
    if(localdata !=null){
      this.signupusers=JSON.parse(localdata)

    }


  }
signupusers:any[]=[]; //to store incoming user data array to display
signupObj:any={ // to add or create new user data array
  userid:" ",
  emailid:"",
  password:" "
};
loginObj:any={
  userid:" ",
  password:" ",
}
  usern:string=" "
  /*signin(){
    
    if(this.userid=="admin" && this.password=="admin"){
       this.usern="login successful1..."
    }
    else{
      this.usern="Login unsuccessful!..."
    }
  }*/
  onsignup(){
this.signupusers.push(this.signupObj); // to push new data signupusers working as stack created in signupObj
localStorage.setItem('signupusers',JSON.stringify(this.signupusers))//to store or set data in local storage and read or get this data from new variable localdata for login
this.signupObj={//new space in stack increated
  userid:" ",
  emailid:"",
  password:" "
};
  }
  onlogin(){
    const userexist=this.signupusers.find(m=>m.username==this.loginObj.userid && m.password==this.loginObj.password)
    if(userexist != undefined){
      alert("login successful!...")

    }
    else{
      alert("wrong credentials")
    }
  }
}
