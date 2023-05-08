import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserSubCategoryService {

  constructor(private http:HttpClient) { }

  addUserSubCategory(subCategory:any):Observable<any>{
    let url = environment.apiUrl+"addUserSubCategory"
    return this.http.post(url,subCategory)
  }

  getAllUserSubategory():Observable<any>{
    return this.http.get(environment.apiUrl+"userSubCategories")
  }

  deleteUserSubCategory(userSubCategoryId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userSubcategory/byId/"+userSubCategoryId)
  }
}
