import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserCategoryService {

  constructor(private http:HttpClient) { }

  addUserCategory(category:any):Observable<any>{
    let url = environment.apiUrl+"addUserCategory"
    // let token = localStorage.getItem("token") as String;
    return this.http.post(url,category)
  }

  getAllUserCategory():Observable<any>{
    return this.http.get(environment.apiUrl+"userCategories")
  }

  deleteUserCategory(userCategoryId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userCategory/byId/"+userCategoryId)
  }
}
