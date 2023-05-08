import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoryService {

  constructor(private http:HttpClient) { }

  addCategory(category:any):Observable<any>{
    let url = environment.apiUrl+"addCategory"
    // let token = localStorage.getItem("token") as String;
    return this.http.post(url,category)
  }

  getAllCategory():Observable<any>{
    return this.http.get(environment.apiUrl+"categories")
  }

  deleteCategory(categoryId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"category/byId/"+categoryId)
  }
}
