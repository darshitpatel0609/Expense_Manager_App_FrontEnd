import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageVendorService {

  constructor(private http:HttpClient) { }

  addVendor(vendor:any):Observable<any>{
    let url = environment.apiUrl+"addVendor"
    return this.http.post(url,vendor)
  }

  getAllVendor():Observable<any>{
    return this.http.get(environment.apiUrl+"vendors")
  }

  deleteVendor(vendorId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"vendor/byId/"+vendorId)
  }
}
