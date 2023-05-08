import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddVendorService {

  constructor(private http:HttpClient) { }

  addUserVendor(userVendor:any):Observable<any>{
    let url = environment.apiUrl+"addUserVendor"
    return this.http.post(url,userVendor)
  }

  getAllUserVendor():Observable<any>{
    return this.http.get(environment.apiUrl+"userVendors")
  }

  deleteUserVendor(userVendorId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"userVendor/byId/"+userVendorId)
  }
}
