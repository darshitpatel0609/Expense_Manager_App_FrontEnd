import { Component } from '@angular/core';
import { UserIncomeService } from '../user-income.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-income',
  templateUrl: './user-income.component.html',
  styleUrls: ['./user-income.component.css']
})
export class UserIncomeComponent {

  constructor(private userIncomeService:UserIncomeService,private router:Router, private toasterService: ToastrService){}

  totalIncome=""
  monthlyExpenditure=""
  weeklyExpenditure=""

  addUserIncome(){
    console.log(this.totalIncome,);
    console.log(this.monthlyExpenditure,);
    console.log(this.weeklyExpenditure,);
    let userIncome={"totalIncome":this.totalIncome,
                  "weeklyExpenditure":this.weeklyExpenditure,
                  "monthlyExpenditure":this.monthlyExpenditure
                  }
    this.userIncomeService.addUserIncome(userIncome).subscribe({
      next:(resp)=>{
        this.toasterService.success("User Income Added Succesfully")
        this.router.navigateByUrl("/app-list-user-income")
      },
      error:(error)=>{
        this.toasterService.error("User Income Not Added")
      }
    })
    
  }

}
