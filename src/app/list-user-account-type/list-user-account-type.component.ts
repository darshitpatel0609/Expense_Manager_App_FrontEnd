import { Component } from '@angular/core';
import { UserAccountTypeService } from '../user-account-type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user-account-type',
  templateUrl: './list-user-account-type.component.html',
  styleUrls: ['./list-user-account-type.component.css']
})
export class ListUserAccountTypeComponent {

  constructor(private userAccountTypeService:UserAccountTypeService, private toasterService: ToastrService){}

  userAccounts=[]
  ngOnInit():void{
    this.userAccountTypeService.getAllUserAccount().subscribe({
      next:(resp)=>{
        this.userAccounts=resp;
        this.toasterService.success("User All Account Details Fetched")

      }
    })
  }

  deleteUserAccount(userAccountId:any){
    this.userAccountTypeService.deleteUserAccount(userAccountId).subscribe({
      next:(resp)=>{
        this.userAccounts = this.userAccounts.filter(userAccount=>userAccount['userAccountId']!=userAccountId)
        this.toasterService.success("User Account Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("User Account Not Deleted...!")
      }
    })
  }


}
