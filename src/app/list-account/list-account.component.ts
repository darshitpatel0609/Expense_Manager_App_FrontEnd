import { Component } from '@angular/core';
import { AccounttypeService } from '../accounttype.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent {

  constructor(private accountTypeService:AccounttypeService, private toasterService: ToastrService){}

  accounts=[]
  ngOnInit():void{
    this.accountTypeService.getAllAccount().subscribe({
      next:(resp)=>{
        this.accounts=resp;
        this.toasterService.success("All Account Details Fetched")

      }
    })
  }

  deleteAccount(accountId:any){
    this.accountTypeService.deleteAccount(accountId).subscribe({
      next:(resp)=>{
        this.accounts = this.accounts.filter(account=>account['accountId']!=accountId)
        this.toasterService.success("Account Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("Account Not Deleted...!")
      }
    })
  }


}
