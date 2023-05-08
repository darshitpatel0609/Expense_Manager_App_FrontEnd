import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageSubcategoryService {
  constructor(private http:HttpClient) { }

  addCategory(category:any):Observable<any>{
    let url = environment.apiUrl+"addSubCategory"
    return this.http.post(url,category)
  }

  getAllCSubategory():Observable<any>{
    return this.http.get(environment.apiUrl+"subCategories")
  }

  deleteSubCategory(subCategoryId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"subcategory/byId/"+subCategoryId)
  }
}
