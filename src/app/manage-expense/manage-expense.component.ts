import { Router } from '@angular/router';
import { ManageExpenseService } from './../manage-expense.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-expense',
  templateUrl: './manage-expense.component.html',
  styleUrls: ['./manage-expense.component.css']
})
export class ManageExpenseComponent {
  constructor(private manageExpenseService:ManageExpenseService,private router:Router,private toasterService:ToastrService){}

  amount=""
  payee=""
  status="true"
  description=""
  date=""

  addExpense(){
    console.log(this.amount);
    console.log(this.payee);
    console.log(this.status);
    console.log(this.description);
    console.log(this.date);

    let expense = {"amount":this.amount,
                  "payee":this.payee,
                  "status":this.status,
                  "description":this.description,
                  "date":this.date
                   }
                this.manageExpenseService.addExpense(expense).subscribe({
                  next:(resp)=>{
                    this.toasterService.success("Expenses Added Succesfully")
                    this.router.navigateByUrl("/app-list-expense")

                  },
                  error:(error)=>{
                    this.toasterService.error("Expenses is not added")
                  }
                })
    
    
    
    
    
  }

}
