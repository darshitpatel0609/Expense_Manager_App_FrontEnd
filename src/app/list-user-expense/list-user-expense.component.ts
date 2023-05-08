import { Component } from '@angular/core';
import { UserExpenseService } from '../user-expense.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user-expense',
  templateUrl: './list-user-expense.component.html',
  styleUrls: ['./list-user-expense.component.css']
})
export class ListUserExpenseComponent {

  constructor(private userExpenseService:UserExpenseService,private toasterService:ToastrService){}

  userExpenses=[]
  ngOnInit():void{
    this.userExpenseService.getAllUserExpense().subscribe({
      next:(resp)=>{
        this.userExpenses=resp;
      }
    })
  }

  deleteUserExpense(userExpenseId:any){
    this.userExpenseService.deleteUserExpense(userExpenseId).subscribe({
      next:(resp)=>{
        this.userExpenses = this.userExpenses.filter(userExpense=>userExpense['userExpenseId']!=userExpenseId)
        this.toasterService.success("User Expense Deleted Successfully")
      },
      error:(error)=>{
        this.toasterService.error("User Expense not deleted")
      }
    })
  }

}
