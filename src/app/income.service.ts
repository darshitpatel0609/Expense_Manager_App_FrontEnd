import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  constructor(private http:HttpClient) { }

  addIncome(income:any):Observable<any>{
    let url = environment.apiUrl+"addIncome"
    return this.http.post(url,income)
  }

  getAllIncome():Observable<any>{
    return this.http.get(environment.apiUrl+"incomes")
  }

  deleteIncome(incomeId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"income/byId/"+incomeId)
  }
}
