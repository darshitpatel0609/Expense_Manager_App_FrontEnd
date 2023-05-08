import { Component } from '@angular/core';
import { UserExpenseService } from '../user-expense.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-expense',
  templateUrl: './user-expense.component.html',
  styleUrls: ['./user-expense.component.css']
})
export class UserExpenseComponent {

  constructor(private userExpenseService:UserExpenseService,private router:Router,private toasterService:ToastrService){}

  amount=""
  payee=""
  status="true"
  description=""
  date=""

  addUserExpense(){
    console.log(this.amount);
    console.log(this.payee);
    console.log(this.status);
    console.log(this.description);
    console.log(this.date);

    let userExpense = {"amount":this.amount,
                  "payee":this.payee,
                  "status":this.status,
                  "description":this.description,
                  "date":this.date
                   }
                this.userExpenseService.addUserExpense(userExpense).subscribe({
                  next:(resp)=>{
                    this.toasterService.success("User Expenses Added Succesfully")
                    this.router.navigateByUrl("/app-list-user-expense")

                  },
                  error:(error)=>{
                    this.toasterService.error("User Expenses is not added")
                  }
                })
    
    
    
    
    
  }

}
