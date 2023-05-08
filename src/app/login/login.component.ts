import { Component } from '@angular/core';
import { SingupService } from '../singup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private signupService:SingupService,private router:Router, private toasterService: ToastrService){
  }
  email:String=""
  password=""

  login(){
    console.log(this.email);
    console.log(this.password);
    let user={"email":this.email,"password":this.password}

    this.signupService.login(user).subscribe(resp=>{
      console.log(resp);
      // alert(resp.msg);
      this.toasterService.success("User Login Succesfully...!")

        let token = resp.data.token;

        localStorage.setItem("token",token);

        let token2 = localStorage.getItem("token");

        // localStorage.clear();          -- logout
      // this.router.navigateByUrl("/app-listuser")
      this.router.navigateByUrl("/app-user-dashboard")
    },error=>{
       console.log(error);
      //  alert(error.msg); 
       this.toasterService.success("Invalid User Credentials...!")    
      })

  }

}
