import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageExpenseService {

  constructor(private http:HttpClient) { }

  addExpense(expense:any):Observable<any>{
    let url = environment.apiUrl+"addExpense"
    return this.http.post(url,expense)
  }

  getAllExpense():Observable<any>{
   return  this.http.get(environment.apiUrl+"expenses")
  }

  deleteExpense(expenseId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"expense/byId/"+expenseId)
  }
}
