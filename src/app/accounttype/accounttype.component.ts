import { Component } from '@angular/core';
import { AccounttypeService } from '../accounttype.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accounttype',
  templateUrl: './accounttype.component.html',
  styleUrls: ['./accounttype.component.css']
})
export class AccounttypeComponent {

  constructor(private accountTypeService:AccounttypeService,private router:Router, private toasterService: ToastrService){}

  accountName:String=""
  displayValue=""

  addAccount(){
    console.log(this.accountName);
    console.log(this.displayValue);
    let account={"accountName":this.accountName,
                  "displayValue":this.displayValue
                }
    this.accountTypeService.addAccount(account).subscribe({
      next:(resp)=>{
        this.toasterService.success("Account Added Succesfully")
        this.router.navigateByUrl("/app-list-account")
      },
      error:(error)=>{
        this.toasterService.error("Account Not Added")
      }
    })
    
  }


}
