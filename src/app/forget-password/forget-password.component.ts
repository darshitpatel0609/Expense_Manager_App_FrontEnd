import { SingupService } from './../singup.service';
import { SignupComponent } from './../signup/signup.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email = ""

  constructor(private singupService: SingupService, private router: Router) {
  }

  ngOnInit(): void {
  }
  // forgetPassword() {
  //   let user = {"email":this.email}
  //   this.singupService.forgetPasswordApi(user).subscribe(resp=>{
  //       if(resp.status == 200){
  //         alert("OTP SENT");
  //         //reset password 
  //         //otp email password confirmpassword 
  //         this.router.navigateByUrl("/resetpassword")

  //       }else{
  //         alert("Invalid Email")
  //       }
  //   })
  forgetPassword() {
    console.log(this.email);

    this.singupService.forgotPassword(this.email).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          console.log(resp);
          alert(resp.msg);
          this.router.navigateByUrl("/app-reset-password")
        }
        else {
          console.log(resp);
          alert(resp.msg);
        }
      }
    })

  }
}



