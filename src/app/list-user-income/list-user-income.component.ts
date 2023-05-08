import { Component } from '@angular/core';
import { UserIncomeService } from '../user-income.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user-income',
  templateUrl: './list-user-income.component.html',
  styleUrls: ['./list-user-income.component.css']
})
export class ListUserIncomeComponent {

  constructor(private userIncomeService:UserIncomeService, private toasterService: ToastrService){}

  userIncomes=[]
  ngOnInit():void{
    this.userIncomeService.getAllUserIncome().subscribe({
      next:(resp)=>{
        this.userIncomes=resp;
        this.toasterService.success("All User Income Details Fetched")

      }
    })
  }

  deleteUserIncome(userIncomeId:any){
    this.userIncomeService.deleteUserIncome(userIncomeId).subscribe({
      next:(resp)=>{
        this.userIncomes = this.userIncomes.filter(userIncome=>userIncome['userIncomeId']!=userIncomeId)
        this.toasterService.success("User Income Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("User Income Not Deleted...!")
      }
    })
  }

}
