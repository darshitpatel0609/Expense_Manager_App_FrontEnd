import { Component } from '@angular/core';
import { IncomeService } from '../income.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  constructor(private incomeService:IncomeService,private router:Router, private toasterService: ToastrService){}

  totalIncome=""
  monthlyExpenditure=""
  weeklyExpenditure=""

  addIncome(){
    console.log(this.totalIncome,);
    console.log(this.monthlyExpenditure,);
    console.log(this.weeklyExpenditure,);
    let income={"totalIncome":this.totalIncome,
                  "weeklyExpenditure":this.weeklyExpenditure,
                  "monthlyExpenditure":this.monthlyExpenditure
                  }
    this.incomeService.addIncome(income).subscribe({
      next:(resp)=>{
        this.toasterService.success("Income Added Succesfully")
        this.router.navigateByUrl("/app-list-income")
      },
      error:(error)=>{
        this.toasterService.error("Income Not Added")
      }
    })
    
  }


}
