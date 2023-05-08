import { Component } from '@angular/core';
import { SingupService } from '../singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password = ""
  confirmPassword = ""
  otp ="" 

  constructor(private singupService:SingupService,private router:Router){
  }

  ngOnInit(): void {
  }

  resetPassword()
  {
    this.singupService.resetPassword(this.otp, this.password, this.confirmPassword).subscribe({
      next: (resp) => {
        if(resp.data != null)
        {
          console.log(resp.msg);
          alert(resp.msg);
          this.router.navigateByUrl("/app-login")
        }
        else
        {
          console.log(resp.msg);
          alert(resp.msg);
        }
      }
    })
  }

}
