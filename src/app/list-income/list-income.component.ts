import { Component } from '@angular/core';
import { IncomeService } from '../income.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css']
})
export class ListIncomeComponent {

  constructor(private incomeService:IncomeService, private toasterService: ToastrService){}

  incomes=[]
  ngOnInit():void{
    this.incomeService.getAllIncome().subscribe({
      next:(resp)=>{
        this.incomes=resp;
        this.toasterService.success("All Income Details Fetched")

      }
    })
  }

  deleteIncome(incomeId:any){
    this.incomeService.deleteIncome(incomeId).subscribe({
      next:(resp)=>{
        this.incomes = this.incomes.filter(income=>income['incomeId']!=incomeId)
        this.toasterService.success("Income Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("Income Not Deleted...!")
      }
    })
  }


}
