import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAccountTypeService {

  constructor(private http:HttpClient) { }

  addUserAccount(userAccount:any):Observable<any>{
    let url = environment.apiUrl+"addUserAccount"
    return this.http.post(url,userAccount)
  }

  getAllUserAccount():Observable<any>{
   return  this.http.get(environment.apiUrl+"userAccounts")
  }

  deleteUserAccount(userAccountId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userAccount/byId/"+userAccountId)
  }
}
