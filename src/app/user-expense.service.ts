import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserExpenseService {

  constructor(private http:HttpClient) { }

  addUserExpense(userExpense:any):Observable<any>{
    let url = environment.apiUrl+"addUserExpense"
    return this.http.post(url,userExpense)
  }

  getAllUserExpense():Observable<any>{
   return  this.http.get(environment.apiUrl+"userExpenses")
  }

  deleteUserExpense(userExpenseId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userExpense/byId/"+userExpenseId)
  }
}
