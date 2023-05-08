import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccounttypeService {

  constructor(private http:HttpClient) { }

  addAccount(account:any):Observable<any>{
    let url = environment.apiUrl+"addAccount"
    return this.http.post(url,account)
  }

  getAllAccount():Observable<any>{
   return  this.http.get(environment.apiUrl+"accounts")
  }

  deleteAccount(accountId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"account/byId/"+accountId)
  }
}
