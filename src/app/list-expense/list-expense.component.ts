import { Component } from '@angular/core';
import { ManageExpenseService } from '../manage-expense.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent {
  constructor(private manageExpenseService:ManageExpenseService,private toasterService:ToastrService){}

  expenses=[]
  ngOnInit():void{
    this.manageExpenseService.getAllExpense().subscribe({
      next:(resp)=>{
        this.expenses=resp;
      }
    })
  }

  deleteExpense(expenseId:any){
    this.manageExpenseService.deleteExpense(expenseId).subscribe({
      next:(resp)=>{
        this.expenses = this.expenses.filter(expense=>expense['expenseId']!=expenseId)
        this.toasterService.success("Expense Deleted Successfully")
      },
      error:(error)=>{
        this.toasterService.error("Expense not deleted")
      }
    })
  }



}
