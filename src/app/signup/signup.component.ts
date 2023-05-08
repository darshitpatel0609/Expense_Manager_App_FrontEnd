import { Router } from '@angular/router';
import { SingupService } from './../singup.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName:String=""
  lastName=""
  email=""
  mobileNumber=""
  password=""
  status="true"

  constructor(private singUpService:SingupService, private router:Router, private toasterService: ToastrService){}

  signUp(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.mobileNumber);
    console.log(this.password);
    console.log(this.status);

    let addUser={"firstName":this.firstName,
            "lastName":this.lastName,
            "email":this.email,
            "mobileNumber":this.mobileNumber,
            "password":this.password,
            "status":this.status
  }

  this.singUpService.addUser(addUser).subscribe({
    next:(resp) => {
      // alert("User Added Succesfully")
      this.toasterService.success("User Added Succesfully...!")
      
      this.router.navigateByUrl("/app-login")
    },
    error:(error)=>{
      this.toasterService.error("User Not Added...!")
      this.toasterService.error(error.error.msg);
    }
  })
    
    
    
    
    
  }

}
