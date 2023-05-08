import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAccountTypeService } from '../user-account-type.service';

@Component({
  selector: 'app-user-account-type',
  templateUrl: './user-account-type.component.html',
  styleUrls: ['./user-account-type.component.css']
})
export class UserAccountTypeComponent {

  constructor(private userAccountTypeService:UserAccountTypeService,private router:Router, private toasterService: ToastrService){}

  accountName:String=""
  displayValue=""

  addUserAccount(){
    console.log(this.accountName);
    console.log(this.displayValue);
    let userAccount={"accountName":this.accountName,
                  "displayValue":this.displayValue
                }
    this.userAccountTypeService.addUserAccount(userAccount).subscribe({
      next:(resp)=>{
        this.toasterService.success("User Account Added Succesfully")
        this.router.navigateByUrl("/app-list-user-account-type")
      },
      error:(error)=>{
        this.toasterService.error("User Account Not Added")
      }
    })
    
  }


}
