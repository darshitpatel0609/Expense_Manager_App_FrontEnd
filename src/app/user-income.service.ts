import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserIncomeService {

  constructor(private http:HttpClient) { }

  addUserIncome(userIncome:any):Observable<any>{
    let url = environment.apiUrl+"addUserIncome"
    return this.http.post(url,userIncome)
  }

  getAllUserIncome():Observable<any>{
    return this.http.get(environment.apiUrl+"userIncomes")
  }

  deleteUserIncome(userIncomeId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userIncome/byId/"+userIncomeId)
  }
}
