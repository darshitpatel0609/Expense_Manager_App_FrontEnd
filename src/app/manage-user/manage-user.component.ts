import { Component } from '@angular/core';
import { ManageuserService } from '../manageuser.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent {
  firstName:String=""
  lastName=""
  email=""
  mobileNumber=""
  password=""
  status="true"

  constructor(private manageUserService:ManageuserService, private router:Router, private toasterService: ToastrService){}

  addUser(){
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

  this.manageUserService.addUser(addUser).subscribe({
    next:(resp) => {
      // alert("User Added Succesfully")
      this.toasterService.success("User Added Succesfully...!")
      
      this.router.navigateByUrl("/app-list-manageuser")
    },
    error:(error)=>{
      this.toasterService.error("User Not Added...!")
      this.toasterService.error(error.error.msg);
    }
  })
  }
}
